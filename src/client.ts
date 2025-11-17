/**
 * Backstage API Client
 * 
 * Wrapper around the auto-generated client with convenience methods
 */

import fetch from 'cross-fetch';

export interface BackstageClientConfig {
  baseUrl: string;
  accessToken?: string;
  refreshToken?: string;
  onTokenRefresh?: (accessToken: string, refreshToken: string) => void | Promise<void>;
  headers?: Record<string, string>;
}

export class BackstageClient {
  private baseUrl: string;
  private accessToken?: string;
  private refreshToken?: string;
  private headers: Record<string, string>;
  private onTokenRefresh?: (accessToken: string, refreshToken: string) => void | Promise<void>;

  constructor(config: BackstageClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
    this.onTokenRefresh = config.onTokenRefresh;
    this.headers = config.headers || {};
  }

  /**
   * Set the access token for authenticated requests
   */
  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  /**
   * Clear the access token
   */
  clearAccessToken(): void {
    this.accessToken = undefined;
  }

  /**
   * Get the current access token
   */
  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  /**
   * Set the refresh token
   */
  setRefreshToken(token: string): void {
    this.refreshToken = token;
  }

  /**
   * Get the current refresh token
   */
  getRefreshToken(): string | undefined {
    return this.refreshToken;
  }

  /**
   * Make an authenticated API request
   */
  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.headers,
      ...(options.headers as Record<string, string> || {}),
    };

    if (this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    let response = await fetch(url, {
      ...options,
      headers,
    });

    // Handle token refresh on 401
    if (response.status === 401 && this.refreshToken && !path.includes('/auth/refresh')) {
      try {
        const refreshResult = await this.auth.refresh({ refreshToken: this.refreshToken });
        this.accessToken = refreshResult.accessToken;
        this.refreshToken = refreshResult.refreshToken;
        
        if (this.onTokenRefresh) {
          await this.onTokenRefresh(refreshResult.accessToken, refreshResult.refreshToken);
        }

        // Retry original request with new token
        headers['Authorization'] = `Bearer ${this.accessToken}`;
        response = await fetch(url, {
          ...options,
          headers,
        });
      } catch (refreshError) {
        // Refresh failed, throw original 401
        throw new Error('Authentication failed. Please log in again.');
      }
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: response.statusText,
        code: 'HTTP_ERROR',
      }));
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  /**
   * Authentication methods
   */
  auth = {
    /**
     * Login with email and password
     */
    login: async (request: { email: string; password: string }) => {
      const response = await this.request<{
        accessToken: string;
        refreshToken: string;
        user: any;
      }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(request),
      });

      this.setAccessToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      return response;
    },

    /**
     * Refresh the access token
     */
    refresh: async (request: { refreshToken: string }) => {
      const response = await this.request<{
        accessToken: string;
        refreshToken: string;
      }>('/auth/refresh', {
        method: 'POST',
        body: JSON.stringify(request),
      });

      this.setAccessToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      
      if (this.onTokenRefresh) {
        await this.onTokenRefresh(response.accessToken, response.refreshToken);
      }
      
      return response;
    },

    /**
     * Redeem an invitation code
     */
    redeemInvitation: async (request: { code: string; password: string }) => {
      const response = await this.request<{
        accessToken: string;
        refreshToken: string;
        user: any;
      }>('/auth/redeem', {
        method: 'POST',
        body: JSON.stringify(request),
      });

      this.setAccessToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      return response;
    },

    /**
     * Federate user to organisation via Stagedoor JWT
     */
    federate: async (request: { token: string }) => {
      const response = await this.request<{
        accessToken: string;
        refreshToken: string;
        user: any;
      }>('/auth/federate', {
        method: 'POST',
        body: JSON.stringify(request),
      });

      this.setAccessToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);
      return response;
    },
  };

  /**
   * User methods
   */
  users = {
    /**
     * Get current user
     */
    getMe: async () => {
      const response = await this.request<{ user: any }>('/users/me', {
        method: 'GET',
      });
      return response.user;
    },

    /**
     * Get user organisations
     */
    getMyOrganisations: async () => {
      const response = await this.request<{ organisations: any[] }>('/users/me/organisations', {
        method: 'GET',
      });
      return response.organisations;
    },
  };

  /**
   * Organisation methods
   */
  organisations = {
    /**
     * Get organisation by ID
     */
    get: async (id: string) => {
      const response = await this.request<{ organisation: any }>(`/organisations/${id}`, {
        method: 'GET',
      });
      return response.organisation;
    },

    /**
     * Update organisation
     */
    update: async (id: string, data: {
      name?: string;
      primaryColor?: string;
      secondaryColor?: string;
      logoUrl?: string;
      metadata?: Record<string, any>;
    }) => {
      const response = await this.request<{ organisation: any }>(`/organisations/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
      });
      return response.organisation;
    },
  };
}
