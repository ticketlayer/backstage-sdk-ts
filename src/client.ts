/**
 * Backstage API Client
 * 
 * Auto-generated wrapper with token management and convenience methods
 * Generated from OpenAPI specification
 */

import type { components } from './generated/types';

// Extract schema types
type CreateAccountResponse = components['schemas']['CreateAccountResponse'];
type CreateUserInvitationRequest = components['schemas']['CreateUserInvitationRequest'];
type CreateUserInvitationResponse = components['schemas']['CreateUserInvitationResponse'];
type DeleteAccountResponse = components['schemas']['DeleteAccountResponse'];
type DeleteUserInvitationResponse = components['schemas']['DeleteUserInvitationResponse'];
type GetAccountResponse = components['schemas']['GetAccountResponse'];
type GetIdentityProviderResponse = components['schemas']['GetIdentityProviderResponse'];
type GetOrganisationResponse = components['schemas']['GetOrganisationResponse'];
type GetUserInvitationResponse = components['schemas']['GetUserInvitationResponse'];
type GetUserMeResponse = components['schemas']['GetUserMeResponse'];
type GetUserOrganisationsResponse = components['schemas']['GetUserOrganisationsResponse'];
type ListAccountsResponse = components['schemas']['ListAccountsResponse'];
type ListIdentityProvidersResponse = components['schemas']['ListIdentityProvidersResponse'];
type ListUserInvitationsResponse = components['schemas']['ListUserInvitationsResponse'];
type LoginRequest = components['schemas']['LoginRequest'];
type LoginResponse = components['schemas']['LoginResponse'];
type RedeemInvitationRequest = components['schemas']['RedeemInvitationRequest'];
type RedeemInvitationResponse = components['schemas']['RedeemInvitationResponse'];
type RefreshTokenRequest = components['schemas']['RefreshTokenRequest'];
type RefreshTokenResponse = components['schemas']['RefreshTokenResponse'];
type ResendUserInvitationResponse = components['schemas']['ResendUserInvitationResponse'];
type UpdateAccountResponse = components['schemas']['UpdateAccountResponse'];
type UpdateIdentityProviderRequest = components['schemas']['UpdateIdentityProviderRequest'];
type UpdateIdentityProviderResponse = components['schemas']['UpdateIdentityProviderResponse'];
type UpdateOrganisationRequest = components['schemas']['UpdateOrganisationRequest'];
type UpdateOrganisationResponse = components['schemas']['UpdateOrganisationResponse'];

export type AuthMode = 'bearer' | 'cookie';

export interface BackstageClientConfig {
  baseUrl: string;
  /**
   * Authentication mode:
   * - 'bearer': Use Authorization header with access/refresh tokens (default)
   * - 'cookie': Use HTTP-only cookies (for Next.js apps with OAuth)
   */
  authMode?: AuthMode;
  accessToken?: string;
  refreshToken?: string;
  onTokenRefresh?: (accessToken: string, refreshToken: string) => void | Promise<void>;
  /**
   * Custom refresh endpoint for cookie-based auth
   * Default: '/api/oauth/refresh' for cookie mode, '/v1/auth/refresh' for bearer mode
   */
  refreshEndpoint?: string;
  headers?: Record<string, string>;
}

export class BackstageClient {
  private baseUrl: string;
  private authMode: AuthMode;
  private accessToken?: string;
  private refreshToken?: string;
  private headers: Record<string, string>;
  private onTokenRefresh?: (accessToken: string, refreshToken: string) => void | Promise<void>;
  private refreshEndpoint: string;

  constructor(config: BackstageClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.authMode = config.authMode || 'bearer';
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
    this.onTokenRefresh = config.onTokenRefresh;
    this.headers = config.headers || {};
    
    // Set default refresh endpoint based on auth mode
    this.refreshEndpoint = config.refreshEndpoint || 
      (this.authMode === 'cookie' ? '/api/oauth/refresh' : '/v1/auth/refresh');
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
   * Get a cookie value by name (browser only)
   */
  private getCookie(name: string): string | undefined {
    if (typeof document === 'undefined') {
      return undefined;
    }
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    
    return undefined;
  }

  /**
   * Extract organisation slug from subdomain (browser only)
   * e.g., "jamie-test-org.backstage.local.t9r.dev" -> "jamie-test-org"
   */
  private getOrgFromSubdomain(): string | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }
    
    const host = window.location.hostname;
    
    // Simply extract the first subdomain part
    // For "jamie-test-org.backstage.local.t9r.dev" -> "jamie-test-org"
    // For "backstage.local.t9r.dev" -> "backstage"  
    const parts = host.split('.');
    
    // If we have more than 2 parts (subdomain + domain + tld minimum)
    // Return the first part as the org slug
    if (parts.length >= 3) {
      const orgSlug = parts[0];
      // Basic validation: org slug shouldn't be empty and shouldn't be 'www'
      if (orgSlug && orgSlug !== 'www' && orgSlug.length > 0) {
        return orgSlug;
      }
    }
    
    return undefined;
  }

  /**
   * Make an authenticated API request
   * - Adds /v1 prefix for API versioning
   * - For bearer mode: Injects Authorization header if token available
   * - For cookie mode: Includes credentials for HTTP-only cookies
   * - Automatically refreshes token on 401
   * - Unwraps JSend format responses
   */
  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    // Ensure path starts with /v1 for API versioning
    const versionedPath = path.startsWith('/v1') ? path : `/v1${path}`;
    const url = `${this.baseUrl}${versionedPath}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.headers,
      ...(options.headers as Record<string, string> || {}),
    };

    // For bearer mode, add Authorization header
    if (this.authMode === 'bearer' && this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }
    
    // For cookie mode, read access_token from cookie and send as Authorization header
    if (this.authMode === 'cookie') {
      const cookieToken = this.getCookie('access_token');
      if (cookieToken) {
        headers['Authorization'] = `Bearer ${cookieToken}`;
      }
      
      // Add organisation context header (required by API for OAuth tokens)
      const orgSlug = this.getOrgFromSubdomain();
      if (orgSlug) {
        headers['X-Ticketlayer-Org'] = orgSlug;
      }
    }

    // For cookie mode, include credentials to send HTTP-only cookies
    const fetchOptions: RequestInit = {
      ...options,
      headers,
    };
    
    if (this.authMode === 'cookie') {
      fetchOptions.credentials = 'include';
    }

    let response = await fetch(url, fetchOptions);

    // Handle token refresh on 401
    const shouldRefresh = response.status === 401 && 
      !path.includes('/auth/refresh') && 
      !path.includes('/oauth/refresh');
    
    if (shouldRefresh) {
      if (this.authMode === 'cookie') {
        // Cookie mode: OAuth refresh not implemented yet
        // For now, just throw authentication error
        // TODO: Implement refresh token flow for OAuth
        throw new Error('Authentication failed. Please log in again.');
      } else if (this.refreshToken) {
        // Bearer mode: Use refresh token to get new access token
        try {
          const refreshUrl = this.refreshEndpoint.startsWith('http')
            ? this.refreshEndpoint
            : `${this.baseUrl}${this.refreshEndpoint}`;
          
          const refreshResponse = await fetch(refreshUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          });
          
          if (!refreshResponse.ok) {
            throw new Error('Token refresh failed');
          }
          
          const refreshJson = await refreshResponse.json();
          const refreshData = refreshJson.status === 'success' && refreshJson.data !== undefined 
            ? refreshJson.data 
            : refreshJson;
          
          this.accessToken = refreshData.accessToken;
          this.refreshToken = refreshData.refreshToken;
          
          if (this.onTokenRefresh) {
            await this.onTokenRefresh(refreshData.accessToken, refreshData.refreshToken);
          }

          // Retry original request with new token
          headers['Authorization'] = `Bearer ${this.accessToken}`;
          response = await fetch(url, {
            ...options,
            headers,
          });
        } catch (refreshError) {
          throw new Error('Authentication failed. Please log in again.');
        }
      }
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: response.statusText,
        code: 'HTTP_ERROR',
      }));
      throw new Error(error.error || 'Request failed');
    }

    const json = await response.json();
    
    // Unwrap JSend format if present
    if (json.status === 'success' && json.data !== undefined) {
      return json.data as T;
    }
    
    return json as T;
  }

  /**
   * Authentication methods
   */
  authentication = {
  /**
   * User login
   * Authenticate a user with email and password, returns access and refresh tokens
   */
  login: async (request: LoginRequest) => {
    const response = await this.request<LoginResponse>(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    this.setAccessToken(response.accessToken);
    this.setRefreshToken(response.refreshToken);

    return response;
  },

  /**
   * Refresh access token
   * Exchange a refresh token for a new access token and refresh token
   */
  refresh: async (request: RefreshTokenRequest) => {
    const response = await this.request<RefreshTokenResponse>(`/auth/refresh`, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    this.setAccessToken(response.accessToken);
    this.setRefreshToken(response.refreshToken);

    if (this.onTokenRefresh) {
      await this.onTokenRefresh(response.accessToken, response.refreshToken);
    }

    return response;
  },

  /**
   * Redeem invitation
   * Redeem an invitation code and set up a new user account
   */
  redeem: async (request: RedeemInvitationRequest) => {
    const response = await this.request<RedeemInvitationResponse>(`/auth/redeem`, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    this.setAccessToken(response.accessToken);
    this.setRefreshToken(response.refreshToken);

    return response;
  },

  /**
   * Federate user to organisation
   * Exchange a Stagedoor JWT token for API access and refresh tokens
   */
  federate: async () => {
    const response = await this.request<LoginResponse>(`/auth/federate`, {
      method: 'POST'
    });

    this.setAccessToken(response.accessToken);
    this.setRefreshToken(response.refreshToken);

    return response;
  }
  };

  /**
   * Users methods
   */
  users = {
  /**
   * Get current user
   * Get the currently authenticated user information
   */
  getMe: async () => {
    const response = await this.request<GetUserMeResponse>(`/users/me`, {
      method: 'GET'
    });

    return response.user;
  },

  /**
   * Get user organisations
   * Get all organisations the current user is a member of
   */
  getMeOrganisations: async () => {
    const response = await this.request<GetUserOrganisationsResponse>(`/users/me/organisations`, {
      method: 'GET'
    });

    return response.organisations;
  }
  };

  /**
   * Organisations methods
   */
  organisations = {
  /**
   * Get organisation
   * Get organisation details including branding information
   */
  get: async (id: string) => {
    const response = await this.request<GetOrganisationResponse>(`/organisations/${id}`, {
      method: 'GET'
    });

    return response.organisation;
  },

  /**
   * Update organisation
   * Update organisation details and branding (owner permission required)
   */
  update: async (id: string, request: UpdateOrganisationRequest) => {
    const response = await this.request<UpdateOrganisationResponse>(`/organisations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(request)
    });

    return response.organisation;
  }
  };

  /**
   * Accounts methods
   */
  accounts = {
  /**
   * List accounts
   * List all accounts for the organisation with optional filtering
   */
  list: async (options?: { search?: string; status?: 'active' | 'inactive' }) => {
    const params = new URLSearchParams();
    if (options?.search !== undefined) params.append('search', String(options.search));
    if (options?.status !== undefined) params.append('status', String(options.status));
    const queryString = params.toString();
    const requestPath = queryString ? `/accounts?${queryString}` : `/accounts`;

    const response = await this.request<ListAccountsResponse>(requestPath, {
      method: 'GET'
    });

    return response.accounts;
  },

  /**
   * Create account
   * Create a new account in the organisation
   */
  create: async (request: { name: string; status?: 'active' | 'inactive' }) => {
    const response = await this.request<CreateAccountResponse>(`/accounts`, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    return response.account;
  },

  /**
   * Get account
   * Get a specific account by ID
   */
  get: async (id: string) => {
    const response = await this.request<GetAccountResponse>(`/accounts/${id}`, {
      method: 'GET'
    });

    return response.account;
  },

  /**
   * Update account
   * Update an existing account
   */
  update: async (id: string, request: { name?: string; status?: 'active' | 'inactive' }) => {
    const response = await this.request<UpdateAccountResponse>(`/accounts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(request)
    });

    return response.account;
  },

  /**
   * Delete account
   * Delete an account (soft delete)
   */
  delete: async (id: string) => {
    const response = await this.request<DeleteAccountResponse>(`/accounts/${id}`, {
      method: 'DELETE'
    });

    return response;
  }
  };

  /**
   * Identity Providers methods
   */
  identityProviders = {
  /**
   * List identity providers
   * List all identity providers for the organisation
   */
  list: async (options?: { organisationId?: string }) => {
    const params = new URLSearchParams();
    if (options?.organisationId !== undefined) params.append('organisationId', String(options.organisationId));
    const queryString = params.toString();
    const requestPath = queryString ? `/identity-providers?${queryString}` : `/identity-providers`;

    const response = await this.request<ListIdentityProvidersResponse>(requestPath, {
      method: 'GET'
    });

    return response.providers;
  },

  /**
   * Get identity provider
   * Get a specific identity provider by ID
   */
  get: async (id: string) => {
    const response = await this.request<GetIdentityProviderResponse>(`/identity-providers/${id}`, {
      method: 'GET'
    });

    return response.provider;
  },

  /**
   * Update identity provider
   * Update an identity provider configuration
   */
  update: async (id: string, request: UpdateIdentityProviderRequest) => {
    const response = await this.request<UpdateIdentityProviderResponse>(`/identity-providers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(request)
    });

    return response.provider;
  }
  };

  /**
   * User Invitations methods
   */
  userInvitations = {
  /**
   * Create user invitation
   * Create a new user invitation and send invitation email
   */
  create: async (request: CreateUserInvitationRequest) => {
    const response = await this.request<CreateUserInvitationResponse>(`/users/invitations`, {
      method: 'POST',
      body: JSON.stringify(request)
    });

    return response.invitation;
  },

  /**
   * List user invitations
   * List all user invitations for the organisation
   */
  list: async (options?: { organisationId?: string; status?: 'pending' | 'redeemed' | 'expired' | 'all' }) => {
    const params = new URLSearchParams();
    if (options?.organisationId !== undefined) params.append('organisationId', String(options.organisationId));
    if (options?.status !== undefined) params.append('status', String(options.status));
    const queryString = params.toString();
    const requestPath = queryString ? `/users/invitations?${queryString}` : `/users/invitations`;

    const response = await this.request<ListUserInvitationsResponse>(requestPath, {
      method: 'GET'
    });

    return response.invitations;
  },

  /**
   * Get user invitation
   * Get a specific user invitation by ID
   */
  get: async (id: string) => {
    const response = await this.request<GetUserInvitationResponse>(`/users/invitations/${id}`, {
      method: 'GET'
    });

    return response.invitation;
  },

  /**
   * Cancel user invitation
   * Cancel a pending user invitation
   */
  delete: async (id: string) => {
    const response = await this.request<DeleteUserInvitationResponse>(`/users/invitations/${id}`, {
      method: 'DELETE'
    });

    return response;
  },

  /**
   * Resend user invitation
   * Resend a user invitation email
   */
  resend: async (id: string) => {
    const response = await this.request<ResendUserInvitationResponse>(`/users/invitations/${id}/resend`, {
      method: 'POST'
    });

    return response.invitation;
  }
  };
}
