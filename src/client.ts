/**
 * Backstage API Client
 * 
 * Auto-generated wrapper with token management and convenience methods
 * Generated from OpenAPI specification
 */

import type { components } from './generated/types';

// Extract schema types
type AddAreaResponse = components['schemas']['AddAreaResponse'];
type AddCategoryResponse = components['schemas']['AddCategoryResponse'];
type AddLineItemResponse = components['schemas']['AddLineItemResponse'];
type AddSeatResponse = components['schemas']['AddSeatResponse'];
type AssignRoleRequest = components['schemas']['AssignRoleRequest'];
type AssignRoleResponse = components['schemas']['AssignRoleResponse'];
type BlockCustomerResponse = components['schemas']['BlockCustomerResponse'];
type BulkAddSeatsResponse = components['schemas']['BulkAddSeatsResponse'];
type BulkImportSeatsResponse = components['schemas']['BulkImportSeatsResponse'];
type CanSellResponse = components['schemas']['CanSellResponse'];
type CancelOrderResponse = components['schemas']['CancelOrderResponse'];
type CancelPaymentResponse = components['schemas']['CancelPaymentResponse'];
type CancelSubscriptionResponse = components['schemas']['CancelSubscriptionResponse'];
type CheckAvailabilityResponse = components['schemas']['CheckAvailabilityResponse'];
type ConfirmReservationResponse = components['schemas']['ConfirmReservationResponse'];
type CreateAccountResponse = components['schemas']['CreateAccountResponse'];
type CreateCustomerResponse = components['schemas']['CreateCustomerResponse'];
type CreateEventOccurrenceResponse = components['schemas']['CreateEventOccurrenceResponse'];
type CreateEventResponse = components['schemas']['CreateEventResponse'];
type CreateHoldResponse = components['schemas']['CreateHoldResponse'];
type CreateInventoryResponse = components['schemas']['CreateInventoryResponse'];
type CreateOrderResponse = components['schemas']['CreateOrderResponse'];
type CreatePaymentProviderResponse = components['schemas']['CreatePaymentProviderResponse'];
type CreatePaymentResponse = components['schemas']['CreatePaymentResponse'];
type CreatePriceSchemeResponse = components['schemas']['CreatePriceSchemeResponse'];
type CreatePurchaseRequest = components['schemas']['CreatePurchaseRequest'];
type CreateRefundResponse = components['schemas']['CreateRefundResponse'];
type CreateRoleRequest = components['schemas']['CreateRoleRequest'];
type CreateRoleResponse = components['schemas']['CreateRoleResponse'];
type CreateSetupIntentResponse = components['schemas']['CreateSetupIntentResponse'];
type CreateSubscriptionRequest = components['schemas']['CreateSubscriptionRequest'];
type CreateSubscriptionResponse = components['schemas']['CreateSubscriptionResponse'];
type CreateUserInvitationRequest = components['schemas']['CreateUserInvitationRequest'];
type CreateUserInvitationResponse = components['schemas']['CreateUserInvitationResponse'];
type CreateVenueLayoutResponse = components['schemas']['CreateVenueLayoutResponse'];
type CreateVenueResponse = components['schemas']['CreateVenueResponse'];
type DeleteAccountResponse = components['schemas']['DeleteAccountResponse'];
type DeleteAreaResponse = components['schemas']['DeleteAreaResponse'];
type DeleteCategoryResponse = components['schemas']['DeleteCategoryResponse'];
type DeleteEventOccurrenceResponse = components['schemas']['DeleteEventOccurrenceResponse'];
type DeleteEventResponse = components['schemas']['DeleteEventResponse'];
type DeleteInventoryResponse = components['schemas']['DeleteInventoryResponse'];
type DeletePaymentMethodResponse = components['schemas']['DeletePaymentMethodResponse'];
type DeletePaymentProviderResponse = components['schemas']['DeletePaymentProviderResponse'];
type DeletePriceSchemeResponse = components['schemas']['DeletePriceSchemeResponse'];
type DeleteRoleResponse = components['schemas']['DeleteRoleResponse'];
type DeleteSeatResponse = components['schemas']['DeleteSeatResponse'];
type DeleteUserInvitationResponse = components['schemas']['DeleteUserInvitationResponse'];
type DeleteVenueLayoutResponse = components['schemas']['DeleteVenueLayoutResponse'];
type DeleteVenueResponse = components['schemas']['DeleteVenueResponse'];
type ExtendReservationResponse = components['schemas']['ExtendReservationResponse'];
type FederateRequest = components['schemas']['FederateRequest'];
type GenerateSeatsResponse = components['schemas']['GenerateSeatsResponse'];
type GetAccountResponse = components['schemas']['GetAccountResponse'];
type GetAuditLogResponse = components['schemas']['GetAuditLogResponse'];
type GetAutoTopupResponse = components['schemas']['GetAutoTopupResponse'];
type GetBalanceResponse = components['schemas']['GetBalanceResponse'];
type GetCustomerResponse = components['schemas']['GetCustomerResponse'];
type GetEventOccurrenceResponse = components['schemas']['GetEventOccurrenceResponse'];
type GetEventResponse = components['schemas']['GetEventResponse'];
type GetIdentityProviderResponse = components['schemas']['GetIdentityProviderResponse'];
type GetInventoryResponse = components['schemas']['GetInventoryResponse'];
type GetInvoiceResponse = components['schemas']['GetInvoiceResponse'];
type GetMeOrganisationsResponse = components['schemas']['GetMeOrganisationsResponse'];
type GetMePermissionsResponse = components['schemas']['GetMePermissionsResponse'];
type GetMeResponse = components['schemas']['GetMeResponse'];
type GetMeRolesResponse = components['schemas']['GetMeRolesResponse'];
type GetOrderResponse = components['schemas']['GetOrderResponse'];
type GetOrganisationResponse = components['schemas']['GetOrganisationResponse'];
type GetPaymentProviderResponse = components['schemas']['GetPaymentProviderResponse'];
type GetPaymentResponse = components['schemas']['GetPaymentResponse'];
type GetPaymentStatusResponse = components['schemas']['GetPaymentStatusResponse'];
type GetPriceSchemeResponse = components['schemas']['GetPriceSchemeResponse'];
type GetReservationResponse = components['schemas']['GetReservationResponse'];
type GetRoleResponse = components['schemas']['GetRoleResponse'];
type GetUserInvitationResponse = components['schemas']['GetUserInvitationResponse'];
type GetVenueLayoutResponse = components['schemas']['GetVenueLayoutResponse'];
type GetVenueResponse = components['schemas']['GetVenueResponse'];
type InitiatePaymentResponse = components['schemas']['InitiatePaymentResponse'];
type ListAccountsResponse = components['schemas']['ListAccountsResponse'];
type ListCustomersResponse = components['schemas']['ListCustomersResponse'];
type ListEventOccurrencesResponse = components['schemas']['ListEventOccurrencesResponse'];
type ListEventsResponse = components['schemas']['ListEventsResponse'];
type ListIdentityProvidersResponse = components['schemas']['ListIdentityProvidersResponse'];
type ListInventoryResponse = components['schemas']['ListInventoryResponse'];
type ListInvoicesResponse = components['schemas']['ListInvoicesResponse'];
type ListOrdersResponse = components['schemas']['ListOrdersResponse'];
type ListPackagesResponse = components['schemas']['ListPackagesResponse'];
type ListPaymentMethodsResponse = components['schemas']['ListPaymentMethodsResponse'];
type ListPaymentProvidersResponse = components['schemas']['ListPaymentProvidersResponse'];
type ListPaymentsResponse = components['schemas']['ListPaymentsResponse'];
type ListPriceSchemesResponse = components['schemas']['ListPriceSchemesResponse'];
type ListRefundsResponse = components['schemas']['ListRefundsResponse'];
type ListReservationsResponse = components['schemas']['ListReservationsResponse'];
type ListRolesResponse = components['schemas']['ListRolesResponse'];
type ListSeatsResponse = components['schemas']['ListSeatsResponse'];
type ListSubscriptionsResponse = components['schemas']['ListSubscriptionsResponse'];
type ListTransactionsResponse = components['schemas']['ListTransactionsResponse'];
type ListUserAccountRolesResponse = components['schemas']['ListUserAccountRolesResponse'];
type ListUserInvitationsResponse = components['schemas']['ListUserInvitationsResponse'];
type ListVenueLayoutsResponse = components['schemas']['ListVenueLayoutsResponse'];
type ListVenuesResponse = components['schemas']['ListVenuesResponse'];
type LoginRequest = components['schemas']['LoginRequest'];
type LoginResponse = components['schemas']['LoginResponse'];
type PurchaseResult = components['schemas']['PurchaseResult'];
type RedeemInvitationRequest = components['schemas']['RedeemInvitationRequest'];
type RedeemInvitationResponse = components['schemas']['RedeemInvitationResponse'];
type RefreshTokenRequest = components['schemas']['RefreshTokenRequest'];
type RefreshTokenResponse = components['schemas']['RefreshTokenResponse'];
type ReleaseHoldResponse = components['schemas']['ReleaseHoldResponse'];
type ReleaseReservationResponse = components['schemas']['ReleaseReservationResponse'];
type RemoveAssignmentResponse = components['schemas']['RemoveAssignmentResponse'];
type RemoveLineItemResponse = components['schemas']['RemoveLineItemResponse'];
type ResendUserInvitationResponse = components['schemas']['ResendUserInvitationResponse'];
type ReserveInventoryResponse = components['schemas']['ReserveInventoryResponse'];
type SavePaymentMethodRequest = components['schemas']['SavePaymentMethodRequest'];
type SavePaymentMethodResponse = components['schemas']['SavePaymentMethodResponse'];
type SetDefaultPaymentMethodResponse = components['schemas']['SetDefaultPaymentMethodResponse'];
type SyncSeatsResponse = components['schemas']['SyncSeatsResponse'];
type TransitionOrderStatusResponse = components['schemas']['TransitionOrderStatusResponse'];
type UnblockCustomerResponse = components['schemas']['UnblockCustomerResponse'];
type UpdateAccountResponse = components['schemas']['UpdateAccountResponse'];
type UpdateAreaResponse = components['schemas']['UpdateAreaResponse'];
type UpdateAutoTopupRequest = components['schemas']['UpdateAutoTopupRequest'];
type UpdateAutoTopupResponse = components['schemas']['UpdateAutoTopupResponse'];
type UpdateCategoryResponse = components['schemas']['UpdateCategoryResponse'];
type UpdateCustomerResponse = components['schemas']['UpdateCustomerResponse'];
type UpdateEventOccurrenceResponse = components['schemas']['UpdateEventOccurrenceResponse'];
type UpdateEventResponse = components['schemas']['UpdateEventResponse'];
type UpdateIdentityProviderRequest = components['schemas']['UpdateIdentityProviderRequest'];
type UpdateIdentityProviderResponse = components['schemas']['UpdateIdentityProviderResponse'];
type UpdateInventoryResponse = components['schemas']['UpdateInventoryResponse'];
type UpdateLineItemResponse = components['schemas']['UpdateLineItemResponse'];
type UpdateOrderResponse = components['schemas']['UpdateOrderResponse'];
type UpdateOrganisationRequest = components['schemas']['UpdateOrganisationRequest'];
type UpdateOrganisationResponse = components['schemas']['UpdateOrganisationResponse'];
type UpdatePaymentProviderResponse = components['schemas']['UpdatePaymentProviderResponse'];
type UpdatePriceSchemeResponse = components['schemas']['UpdatePriceSchemeResponse'];
type UpdateRoleRequest = components['schemas']['UpdateRoleRequest'];
type UpdateRoleResponse = components['schemas']['UpdateRoleResponse'];
type UpdateSeatResponse = components['schemas']['UpdateSeatResponse'];
type UpdateUserAccountRolesRequest = components['schemas']['UpdateUserAccountRolesRequest'];
type UpdateUserAccountRolesResponse = components['schemas']['UpdateUserAccountRolesResponse'];
type UpdateVenueLayoutResponse = components['schemas']['UpdateVenueLayoutResponse'];
type UpdateVenueResponse = components['schemas']['UpdateVenueResponse'];
type ValidateOrderResponse = components['schemas']['ValidateOrderResponse'];

/**
 * Custom error class for API errors with error code support
 */
export class BackstageAPIError extends Error {
  public readonly code: string;
  public readonly statusCode: number;

  constructor(message: string, code: string, statusCode: number) {
    super(message);
    this.name = 'BackstageAPIError';
    this.code = code;
    this.statusCode = statusCode;
  }

  /**
   * Check if this is a permission denied error
   */
  isPermissionDenied(): boolean {
    return this.code === 'PERMISSION_DENIED';
  }

  /**
   * Check if this is an authentication error
   */
  isAuthenticationError(): boolean {
    return this.code === 'AUTHENTICATION_REQUIRED' || this.code === 'INVALID_TOKEN' || this.code === 'SESSION_EXPIRED';
  }

  /**
   * Check if this is a session expired error (401 that couldn't be refreshed)
   */
  isSessionExpired(): boolean {
    return this.code === 'SESSION_EXPIRED';
  }

  /**
   * Check if this is a not found error
   */
  isNotFound(): boolean {
    return this.code === 'NOT_FOUND';
  }

  /**
   * Check if this is a validation error
   */
  isValidationError(): boolean {
    return this.code === 'VALIDATION_ERROR';
  }
}

export type AuthMode = 'bearer' | 'cookie';

/**
 * Debug logging configuration
 */
export interface DebugConfig {
  /**
   * Log requests before they are sent
   */
  logRequests?: boolean;
  /**
   * Log successful responses
   */
  logResponses?: boolean;
  /**
   * Log errors
   */
  logErrors?: boolean;
  /**
   * Custom logger function. Defaults to console.log/console.error
   */
  logger?: {
    log: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
  };
}

export interface BackstageClientConfig {
  baseUrl: string;
  /**
   * Authentication mode:
   * - 'bearer': Use Authorization header with access/refresh tokens (default)
   * - 'cookie': Use HTTP-only cookies (for Next.js apps with OAuth)
   */
  authMode?: AuthMode;
  /**
   * Enable debug mode for logging all SDK operations.
   * Can be a boolean (enables all logging) or a DebugConfig object for fine-grained control.
   */
  debug?: boolean | DebugConfig;
  accessToken?: string;
  refreshToken?: string;
  /**
   * Called after successful token refresh (bearer mode only).
   * Use this to persist the new tokens.
   */
  onTokenRefresh?: (accessToken: string, refreshToken: string) => void | Promise<void>;
  /**
   * Called when a 401 is received. Return true if refresh was successful and the request should be retried.
   * If not provided, default behaviour depends on authMode:
   * - cookie mode: calls refreshEndpoint automatically
   * - bearer mode: uses refreshToken if available
   */
  onAuthFailure?: () => Promise<boolean>;
  /**
   * Custom refresh endpoint.
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
  private onAuthFailure?: () => Promise<boolean>;
  private refreshEndpoint: string;
  private debugConfig: DebugConfig | null;
  private logger: { log: (...args: unknown[]) => void; error: (...args: unknown[]) => void };

  constructor(config: BackstageClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.authMode = config.authMode || 'bearer';
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
    this.onTokenRefresh = config.onTokenRefresh;
    this.onAuthFailure = config.onAuthFailure;
    this.headers = config.headers || {};
    
    // Set default refresh endpoint based on auth mode
    this.refreshEndpoint = config.refreshEndpoint || 
      (this.authMode === 'cookie' ? '/api/oauth/refresh' : '/v1/auth/refresh');
    
    // Configure debug mode
    if (config.debug === true) {
      this.debugConfig = { logRequests: true, logResponses: true, logErrors: true };
    } else if (config.debug && typeof config.debug === 'object') {
      this.debugConfig = config.debug;
    } else {
      this.debugConfig = null;
    }
    
    // Set up logger
    this.logger = this.debugConfig?.logger || {
      log: (...args: unknown[]) => console.log('[BackstageSDK]', ...args),
      error: (...args: unknown[]) => console.error('[BackstageSDK]', ...args),
    };
  }

  /**
   * Log a debug message if debug mode is enabled
   */
  private debugLog(type: 'request' | 'response' | 'error', ...args: unknown[]): void {
    if (!this.debugConfig) return;
    
    if (type === 'request' && this.debugConfig.logRequests) {
      this.logger.log('→', ...args);
    } else if (type === 'response' && this.debugConfig.logResponses) {
      this.logger.log('←', ...args);
    } else if (type === 'error' && this.debugConfig.logErrors) {
      this.logger.error('✗', ...args);
    }
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
   * Attempt to refresh the authentication token.
   * Returns true if refresh was successful and the request should be retried.
   */
  private async attemptTokenRefresh(): Promise<boolean> {
    // If consumer provided custom auth failure handler, use it
    if (this.onAuthFailure) {
      return await this.onAuthFailure();
    }
    
    // Otherwise, use default behaviour based on auth mode
    if (this.authMode === 'cookie') {
      // Cookie mode: Call the refresh endpoint (browser only)
      try {
        const refreshResponse = await fetch(this.refreshEndpoint, {
          method: 'POST',
          credentials: 'include',
        });
        return refreshResponse.ok;
      } catch {
        return false;
      }
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
          return false;
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
        
        return true;
      } catch {
        return false;
      }
    }
    
    return false;
  }

  /**
   * Make an authenticated API request
   * - Adds /v1 prefix for API versioning
   * - For bearer mode: Injects Authorization header if token available
   * - For cookie mode: Includes credentials for HTTP-only cookies
   * - Automatically attempts to refresh token on 401
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

    // Debug: Log request
    const requestBody = options.body ? JSON.parse(options.body as string) : undefined;
    this.debugLog('request', options.method || 'GET', versionedPath, requestBody ? { body: requestBody } : '');

    let response = await fetch(url, fetchOptions);

    // Handle token refresh on 401
    const shouldRefresh = response.status === 401 && 
      !path.includes('/auth/refresh') && 
      !path.includes('/oauth/refresh');
    
    if (shouldRefresh) {
      const refreshSuccessful = await this.attemptTokenRefresh();
      
      if (refreshSuccessful) {
        // Update headers with new token (for bearer mode)
        if (this.authMode === 'bearer' && this.accessToken) {
          headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        // For cookie mode, the cookie was updated by the refresh endpoint
        // Re-read it for the retry request
        if (this.authMode === 'cookie') {
          const newCookieToken = this.getCookie('access_token');
          if (newCookieToken) {
            headers['Authorization'] = `Bearer ${newCookieToken}`;
          }
        }
        
        // Retry original request
        response = await fetch(url, {
          ...options,
          headers,
          credentials: this.authMode === 'cookie' ? 'include' : undefined,
        });
      } else {
        // Refresh failed - throw session expired error
        throw new BackstageAPIError('Session expired. Please log in again.', 'SESSION_EXPIRED', 401);
      }
    }

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({
        error: { message: response.statusText, code: 'HTTP_ERROR' },
      }));
      
      // API error format: { status: "error", error: { message: "...", code: "..." } }
      const errorInfo = errorBody.error || errorBody;
      const message = typeof errorInfo === 'object' && errorInfo !== null
        ? (errorInfo.message || 'Request failed')
        : String(errorInfo || 'Request failed');
      const code = typeof errorInfo === 'object' && errorInfo !== null
        ? (errorInfo.code || 'UNKNOWN_ERROR')
        : 'UNKNOWN_ERROR';
      
      // Debug: Log error
      const error = new BackstageAPIError(message, code, response.status);
      this.debugLog('error', options.method || 'GET', versionedPath, { status: response.status, code, message });
      
      throw error;
    }

    const json = await response.json();
    
    // Unwrap JSend format if present
    let result: T;
    if (json.status === 'success' && json.data !== undefined) {
      result = json.data as T;
    } else {
      result = json as T;
    }
    
    // Debug: Log response
    this.debugLog('response', options.method || 'GET', versionedPath, { status: response.status, data: result });
    
    return result;
  }

  /**
   * Authentication methods
   */
  authentication = {
            /**
     * User login
     * Authenticate a user with email and password, returns access and refresh tokens
     * @operationId login
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
     * @operationId refresh
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
     * @operationId redeem
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
     * @operationId federate
     */
        federate: async (request: FederateRequest) => {
      const response = await this.request<LoginResponse>(`/auth/federate`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      this.setAccessToken(response.accessToken);
      this.setRefreshToken(response.refreshToken);

      return response;
        }
  };

  /**
   * Me methods
   */
  me = {
            /**
     * Get current user
     * Get the currently authenticated user information
     * @operationId getCurrentUser
     */
        current: async () => {
      const response = await this.request<GetMeResponse>(`/me`, {
        method: 'GET'
      });

      return response.user;
        },

            /**
     * Get my organisations
     * Get all organisations the current user is a member of
     * @operationId getMyOrganisations
     */
        organisations: async () => {
      const response = await this.request<GetMeOrganisationsResponse>(`/me/organisations`, {
        method: 'GET'
      });

      return response.organisations;
        },

            /**
     * Get my roles
     * Get the current user's role assignments with role info (name, description). Does not include permissions - use /me/permissions for that.
     * @operationId getMyRoles
     */
        roles: async () => {
      const response = await this.request<GetMeRolesResponse>(`/me/roles`, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get my permissions
     * Get the current user's effective permissions based on their role assignments. Supports filtering by resource and/or action.
     * @operationId getMyPermissions
     */
        permissions: async (options?: { resource?: string; action?: string }) => {
      const params = new URLSearchParams();
      if (options?.resource !== undefined) params.append('resource', String(options.resource));
      if (options?.action !== undefined) params.append('action', String(options.action));
      const queryString = params.toString();
      const requestPath = queryString ? `/me/permissions?${queryString}` : `/me/permissions`;

      const response = await this.request<GetMePermissionsResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        }
  };

  /**
   * Organisations methods
   */
  organisations = {
            /**
     * Get organisation
     * Get organisation details including branding information
     * @operationId getOrganisation
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
     * @operationId updateOrganisation
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
     * @operationId listAccounts
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
     * @operationId createAccount
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
     * @operationId getAccount
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
     * @operationId updateAccount
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
     * @operationId deleteAccount
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
     * @operationId listIdentityProviders
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
     * @operationId getIdentityProvider
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
     * @operationId updateIdentityProvider
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
     * @operationId createUserInvitation
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
     * @operationId listUserInvitations
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
     * @operationId getUserInvitation
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
     * @operationId cancelUserInvitation
     */
        cancel: async (id: string) => {
      const response = await this.request<DeleteUserInvitationResponse>(`/users/invitations/${id}`, {
        method: 'DELETE'
      });

      return response;
        },

            /**
     * Resend user invitation
     * Resend a user invitation email
     * @operationId resendUserInvitation
     */
        resend: async (id: string) => {
      const response = await this.request<ResendUserInvitationResponse>(`/users/invitations/${id}/resend`, {
        method: 'POST'
      });

      return response.invitation;
        }
  };

  /**
   * Roles methods
   */
  roles = {
            /**
     * List roles
     * List all roles for the organisation. Returns both system-defined and custom roles.
     * @operationId listRoles
     */
        list: async () => {
      const response = await this.request<ListRolesResponse>(`/roles`, {
        method: 'GET'
      });

      return response.roles;
        },

            /**
     * Create role
     * Create a new custom role with specified permissions. Permissions use format: resource.action:scope (e.g., events.create, events.read:all, events.*:acc_123)
     * @operationId createRole
     */
        create: async (request: CreateRoleRequest) => {
      const response = await this.request<CreateRoleResponse>(`/roles`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Get role
     * Get a specific role by ID
     * @operationId getRole
     */
        get: async (id: string) => {
      const response = await this.request<GetRoleResponse>(`/roles/${id}`, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Update role
     * Update an existing custom role. System roles cannot be modified.
     * @operationId updateRole
     */
        update: async (id: string, request: UpdateRoleRequest) => {
      const response = await this.request<UpdateRoleResponse>(`/roles/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Delete role
     * Delete a custom role (soft delete). System roles cannot be deleted.
     * @operationId deleteRole
     */
        delete: async (id: string) => {
      const response = await this.request<DeleteRoleResponse>(`/roles/${id}`, {
        method: 'DELETE'
      });

      return response;
        }
  };

  /**
   * User Account Roles methods
   */
  userAccountRoles = {
            /**
     * List all role assignments
     * List all role assignments in the organisation. Shows which users have which roles on which accounts.
     * @operationId listUserAccountRoles
     */
        list: async () => {
      const response = await this.request<ListUserAccountRolesResponse>(`/user-accounts`, {
        method: 'GET'
      });

      return response.assignments;
        },

            /**
     * Assign role to user
     * Assign a role to a user for a specific account. Creates a new role assignment.
     * @operationId assignRole
     */
        assign: async (request: AssignRoleRequest) => {
      const response = await this.request<AssignRoleResponse>(`/user-accounts`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.assignment;
        },

            /**
     * Update user roles on account
     * Update the roles for a user on an account. Replaces all existing role assignments for this user-account pair.
     * @operationId updateUserAccountRoles
     */
        update: async (request: UpdateUserAccountRolesRequest) => {
      const response = await this.request<UpdateUserAccountRolesResponse>(`/user-accounts`, {
        method: 'PUT',
        body: JSON.stringify(request)
      });

      return response.assignments;
        },

            /**
     * Remove role assignment
     * Remove a specific role assignment from a user.
     * @operationId removeRoleAssignment
     */
        remove: async (id: string) => {
      const response = await this.request<RemoveAssignmentResponse>(`/user-accounts/${id}`, {
        method: 'DELETE'
      });

      return response.success;
        },

            /**
     * List role assignments for user
     * List all role assignments for a specific user across all accounts.
     * @operationId listUserAccountRolesByUser
     */
        listByUser: async (userId: string) => {
      const response = await this.request<ListUserAccountRolesResponse>(`/user-accounts/user/${userId}`, {
        method: 'GET'
      });

      return response.assignments;
        },

            /**
     * List role assignments for account
     * List all role assignments for a specific account (all users with access).
     * @operationId listUserAccountRolesByAccount
     */
        listByAccount: async (accountId: string) => {
      const response = await this.request<ListUserAccountRolesResponse>(`/user-accounts/account/${accountId}`, {
        method: 'GET'
      });

      return response.assignments;
        }
  };

  /**
   * Events methods
   * Use events() to access nested resources: events(id).occurrences, priceschemes
   */
  events = Object.assign(
    (eventId: string) => ({
      occurrences: {
            /**
     * List occurrences for event
     * List all occurrences for a specific event with optional filtering and pagination
     * @operationId listEventOccurrences
     */
        list: async (options?: { status?: 'draft' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: string; startDateFrom?: string; startDateTo?: string; page?: string; limit?: string }) => {
          const params = new URLSearchParams();
          if (options?.status !== undefined) params.append('status', String(options.status));
          if (options?.venueId !== undefined) params.append('venueId', String(options.venueId));
          if (options?.startDateFrom !== undefined) params.append('startDateFrom', String(options.startDateFrom));
          if (options?.startDateTo !== undefined) params.append('startDateTo', String(options.startDateTo));
          if (options?.page !== undefined) params.append('page', String(options.page));
          if (options?.limit !== undefined) params.append('limit', String(options.limit));
          const queryString = params.toString();
          const requestPath = queryString ? `/events/${eventId}/occurrences?${queryString}` : `/events/${eventId}/occurrences`;

          const response = await this.request<ListEventOccurrencesResponse>(requestPath, {
            method: 'GET'
          });

          return response;
        },

            /**
     * Create event occurrence
     * Create a new occurrence for an event
     * @operationId createEventOccurrence
     */
        create: async (request: { startDate: string; startTime: string; endDate: string; endTime: string; timezone?: string; venueId?: string; venueLayoutId?: string; ticketSchemeId?: string; priceSchemeId?: string; categoryMapping?: { ticketCategoryId: string; venueLayoutCategoryId: string; enabled?: boolean }[]; status: 'draft' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled' }) => {
          const response = await this.request<CreateEventOccurrenceResponse>(`/events/${eventId}/occurrences`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response.eventOccurrence;
        },

            /**
     * Get event occurrence
     * Get a specific event occurrence by ID
     * @operationId getEventOccurrence
     */
        get: async (occurrenceId: string) => {
          const response = await this.request<GetEventOccurrenceResponse>(`/events/${eventId}/occurrences/${occurrenceId}`, {
            method: 'GET'
          });

          return response.eventOccurrence;
        },

            /**
     * Update event occurrence
     * Update an existing event occurrence
     * @operationId updateEventOccurrence
     */
        update: async (occurrenceId: string, request: { startDate?: string; startTime?: string; endDate?: string; endTime?: string; timezone?: string; venueId?: any; venueLayoutId?: any; ticketSchemeId?: any; priceSchemeId?: any; categoryMapping?: any; status?: 'draft' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled' }) => {
          const response = await this.request<UpdateEventOccurrenceResponse>(`/events/${eventId}/occurrences/${occurrenceId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response.eventOccurrence;
        },

            /**
     * Delete event occurrence
     * Delete an event occurrence (soft delete)
     * @operationId deleteEventOccurrence
     */
        delete: async (occurrenceId: string) => {
          const response = await this.request<DeleteEventOccurrenceResponse>(`/events/${eventId}/occurrences/${occurrenceId}`, {
            method: 'DELETE'
          });

          return response;
        }
      },
priceschemes: {
            /**
     * List price schemes for event
     * List all price schemes for a specific event
     * @operationId listEventPriceSchemes
     */
        list: async () => {
          const response = await this.request<ListPriceSchemesResponse>(`/events/${eventId}/price-schemes`, {
            method: 'GET'
          });

          return response.priceSchemes;
        },

            /**
     * Create price scheme for event
     * Create a new price scheme for an event
     * @operationId createEventPriceScheme
     */
        create: async (request: { name: string; description?: string; status?: 'draft' | 'active' | 'archived'; parentPriceSchemeId?: string; ticketPrices?: { categoryId: string; typeId: string; price: number; currency?: 'GBP' | 'USD' | 'EUR' | 'AUD' | 'CAD' }[] }) => {
          const response = await this.request<CreatePriceSchemeResponse>(`/events/${eventId}/price-schemes`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response.priceScheme;
        },

            /**
     * Get price scheme
     * Get a specific price scheme by ID
     * @operationId getEventPriceScheme
     */
        get: async (priceSchemeId: string) => {
          const response = await this.request<GetPriceSchemeResponse>(`/events/${eventId}/price-schemes/${priceSchemeId}`, {
            method: 'GET'
          });

          return response.priceScheme;
        },

            /**
     * Update price scheme
     * Update an existing price scheme
     * @operationId updateEventPriceScheme
     */
        update: async (priceSchemeId: string, request: { name?: string; description?: any; status?: 'draft' | 'active' | 'archived'; ticketPrices?: { categoryId: string; typeId: string; price: number; currency?: 'GBP' | 'USD' | 'EUR' | 'AUD' | 'CAD' }[] }) => {
          const response = await this.request<UpdatePriceSchemeResponse>(`/events/${eventId}/price-schemes/${priceSchemeId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response.priceScheme;
        },

            /**
     * Delete price scheme
     * Delete a price scheme (soft delete)
     * @operationId deleteEventPriceScheme
     */
        delete: async (priceSchemeId: string) => {
          const response = await this.request<DeletePriceSchemeResponse>(`/events/${eventId}/price-schemes/${priceSchemeId}`, {
            method: 'DELETE'
          });

          return response;
        }
      }
    }),
    {
            /**
     * List events
     * List all events for the organisation with optional filtering and pagination. Use expand=venue to embed venue details.
     * @operationId listEvents
     */
        list: async (options?: { search?: string; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: string; accountId?: string; expand?: string; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.search !== undefined) params.append('search', String(options.search));
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.venueId !== undefined) params.append('venueId', String(options.venueId));
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      if (options?.expand !== undefined) params.append('expand', String(options.expand));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/events?${queryString}` : `/events`;

      const response = await this.request<ListEventsResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Create event
     * Create a new event in the organisation
     * @operationId createEvent
     */
        create: async (request: { accountId: string; name: string; description?: string; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: any; venueName?: any; timezone?: string; onSaleDate?: string; offSaleDate?: string; tags?: string[]; ticketTypes?: { id?: string; name: string; description?: string; displayOrder: number }[]; layout?: { categories?: { id?: string; name: string; description?: string; displayOrder?: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; capacity: number; categoryId?: string; displayOrder?: number }[]; venueLayoutTemplateId?: string } }) => {
      const response = await this.request<CreateEventResponse>(`/events`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.event;
        },

            /**
     * Get event
     * Get a specific event by ID. Use expand=venue to embed venue details.
     * @operationId getEvent
     */
        get: async (id: string, options?: { expand?: string }) => {
      const params = new URLSearchParams();
      if (options?.expand !== undefined) params.append('expand', String(options.expand));
      const queryString = params.toString();
      const requestPath = queryString ? `/events/${id}?${queryString}` : `/events/${id}`;

      const response = await this.request<GetEventResponse>(requestPath, {
        method: 'GET'
      });

      return response.event;
        },

            /**
     * Update event
     * Update an existing event
     * @operationId updateEvent
     */
        update: async (id: string, request: { name?: string; description?: any; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: any; venueName?: any; timezone?: string; onSaleDate?: any; offSaleDate?: any; tags?: string[]; ticketTypes?: { id?: string; name: string; description?: string; displayOrder: number }[]; layout?: { categories?: { id?: string; name: string; description?: string; displayOrder?: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; capacity: number; categoryId?: string; displayOrder?: number }[]; venueLayoutTemplateId?: string } }) => {
      const response = await this.request<UpdateEventResponse>(`/events/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.event;
        },

            /**
     * Delete event
     * Delete an event (soft delete)
     * @operationId deleteEvent
     */
        delete: async (id: string) => {
      const response = await this.request<DeleteEventResponse>(`/events/${id}`, {
        method: 'DELETE'
      });

      return response;
        }
    }
  );

  /**
   * Venues methods
   * Use venues() to access nested resources: venues(id).venuelayouts, venuelayoutareas, venuelayoutcategories, venuelayoutseats
   */
  venues = Object.assign(
    (id: string) => ({
      venuelayouts: {
            /**
     * List layouts for venue
     * List all layouts for a specific venue with optional filtering and pagination
     * @operationId listVenueLayouts
     */
        list: async (options?: { search?: string; status?: 'active' | 'archived'; accountId?: string; page?: string; limit?: string }) => {
          const params = new URLSearchParams();
          if (options?.search !== undefined) params.append('search', String(options.search));
          if (options?.status !== undefined) params.append('status', String(options.status));
          if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
          if (options?.page !== undefined) params.append('page', String(options.page));
          if (options?.limit !== undefined) params.append('limit', String(options.limit));
          const queryString = params.toString();
          const requestPath = queryString ? `/venues/${id}/layouts?${queryString}` : `/venues/${id}/layouts`;

          const response = await this.request<ListVenueLayoutsResponse>(requestPath, {
            method: 'GET'
          });

          return response;
        },

            /**
     * Create venue layout
     * Create a new layout for a venue
     * @operationId createVenueLayout
     */
        create: async (request: { name: string; description?: string; status?: 'active' | 'archived'; totalCapacity?: number; floors?: { id?: string; name: string; displayOrder: number; description?: string }[]; categories?: { id?: string; name: string; description?: string; displayOrder: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; floorId?: string; capacity: number; displayOrder: number; color?: string; sections?: { id?: string; name: string; displayOrder: number; description?: string }[]; position?: { x: number; y: number; width: number; height: number }; seats?: { id?: string; sectionId?: string; section?: string; row: string; number: string; label: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[] }[]; decorations?: { id?: string; type: 'stage' | 'pillar' | 'barrier' | 'aisle' | 'wall' | 'exit' | 'entrance' | 'bar' | 'restroom' | 'label' | 'custom'; name?: string; position: { x: number; y: number; width: number; height: number; rotation?: number }; label?: string; style?: { fill?: string; stroke?: string; fontSize?: number; fontWeight?: string } }[]; tags?: string[] }) => {
          const response = await this.request<CreateVenueLayoutResponse>(`/venues/${id}/layouts`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response.venueLayout;
        },

            /**
     * Get venue layout
     * Get a specific venue layout by ID
     * @operationId getVenueLayout
     */
        get: async (layoutId: string) => {
          const response = await this.request<GetVenueLayoutResponse>(`/venues/${id}/layouts/${layoutId}`, {
            method: 'GET'
          });

          return response.venueLayout;
        },

            /**
     * Update venue layout
     * Update an existing venue layout
     * @operationId updateVenueLayout
     */
        update: async (layoutId: string, request: { name?: string; description?: string; status?: 'active' | 'archived'; totalCapacity?: number; floors?: { id?: string; name: string; displayOrder: number; description?: string }[]; categories?: { id?: string; name: string; description?: string; displayOrder: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; floorId?: string; capacity: number; displayOrder: number; color?: string; sections?: { id?: string; name: string; displayOrder: number; description?: string }[]; position?: { x: number; y: number; width: number; height: number }; seats?: { id?: string; sectionId?: string; section?: string; row: string; number: string; label: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[] }[]; decorations?: { id?: string; type: 'stage' | 'pillar' | 'barrier' | 'aisle' | 'wall' | 'exit' | 'entrance' | 'bar' | 'restroom' | 'label' | 'custom'; name?: string; position: { x: number; y: number; width: number; height: number; rotation?: number }; label?: string; style?: { fill?: string; stroke?: string; fontSize?: number; fontWeight?: string } }[]; tags?: string[] }) => {
          const response = await this.request<UpdateVenueLayoutResponse>(`/venues/${id}/layouts/${layoutId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response.venueLayout;
        },

            /**
     * Delete venue layout
     * Delete a venue layout (soft delete)
     * @operationId deleteVenueLayout
     */
        delete: async (layoutId: string) => {
          const response = await this.request<DeleteVenueLayoutResponse>(`/venues/${id}/layouts/${layoutId}`, {
            method: 'DELETE'
          });

          return response;
        }
      },
venuelayoutareas: {
            /**
     * Add area to venue layout
     * Add a new area to a venue layout
     * @operationId addAreaToVenueLayout
     */
        addArea: async (layoutId: string, request: { name: string; description?: string; type: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; capacity: number; displayOrder?: number; color?: string; seats?: any[]; position?: { x: number; y: number; width: number; height: number }; categoryId?: string }) => {
          const response = await this.request<AddAreaResponse>(`/venues/${id}/layouts/${layoutId}/areas`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Update venue layout area
     * Update an area in a venue layout
     * @operationId updateVenueLayoutArea
     */
        updateArea: async (layoutId: string, areaId: string, request: { name?: string; description?: string; type?: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; capacity?: number; displayOrder?: number; color?: string; seats?: any[]; position?: { x: number; y: number; width: number; height: number }; categoryId?: string }) => {
          const response = await this.request<UpdateAreaResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Delete venue layout area
     * Delete an area from a venue layout
     * @operationId deleteVenueLayoutArea
     */
        deleteArea: async (layoutId: string, areaId: string) => {
          const response = await this.request<DeleteAreaResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}`, {
            method: 'DELETE'
          });

          return response;
        }
      },
venuelayoutcategories: {
            /**
     * Add category to venue layout
     * Add a new pricing category to a venue layout
     * @operationId addCategoryToVenueLayout
     */
        addCategory: async (layoutId: string, request: { name: string; description?: string; displayOrder?: number; color?: string }) => {
          const response = await this.request<AddCategoryResponse>(`/venues/${id}/layouts/${layoutId}/categories`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Update venue layout category
     * Update a pricing category in a venue layout
     * @operationId updateVenueLayoutCategory
     */
        updateCategory: async (layoutId: string, categoryId: string, request: { name?: string; description?: string; displayOrder?: number; color?: string }) => {
          const response = await this.request<UpdateCategoryResponse>(`/venues/${id}/layouts/${layoutId}/categories/${categoryId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Delete venue layout category
     * Delete a pricing category from a venue layout
     * @operationId deleteVenueLayoutCategory
     */
        deleteCategory: async (layoutId: string, categoryId: string) => {
          const response = await this.request<DeleteCategoryResponse>(`/venues/${id}/layouts/${layoutId}/categories/${categoryId}`, {
            method: 'DELETE'
          });

          return response;
        }
      },
venuelayoutseats: {
            /**
     * Add seat to area
     * Add a single seat to an allocated seating area
     * @operationId addSeatToArea
     */
        addSeat: async (layoutId: string, areaId: string, request: { section?: string; row: string; number: string; label?: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }) => {
          const response = await this.request<AddSeatResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Bulk add seats to area
     * Add multiple seats to an allocated seating area at once
     * @operationId bulkAddSeatsToArea
     */
        bulkAddSeats: async (layoutId: string, areaId: string, request: { seats: { section?: string; row: string; number: string; label?: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[] }) => {
          const response = await this.request<BulkAddSeatsResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats/bulk`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Generate seats for area
     * Generate seats from a template specifying rows and seats per row
     * @operationId generateSeatsForArea
     */
        generateSeats: async (layoutId: string, areaId: string, request: { section?: string; startRow: string; endRow: string; seatsPerRow: number; rowPrefix?: string; seatPrefix?: string; categoryId?: string; skipRows?: string[]; skipSeats?: string[] }) => {
          const response = await this.request<GenerateSeatsResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats/generate`, {
            method: 'POST',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Sync seats in area
     * Replace all seats in an allocated seating area with the provided seats. Used by the visual seating map editor for full saves.
     * @operationId syncSeatsInArea
     */
        syncSeats: async (layoutId: string, areaId: string, request: { seats: { id?: string; section?: string; row: string; number: string; label?: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[]; clearExisting?: boolean }) => {
          const response = await this.request<SyncSeatsResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats/sync`, {
            method: 'PUT',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Update seat in area
     * Update a seat in an allocated seating area
     * @operationId updateSeatInArea
     */
        updateSeat: async (layoutId: string, areaId: string, seatId: string, request: { section?: string; row?: string; number?: string; label?: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }) => {
          const response = await this.request<UpdateSeatResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats/${seatId}`, {
            method: 'PATCH',
            body: JSON.stringify(request)
          });

          return response;
        },

            /**
     * Delete seat from area
     * Delete a seat from an allocated seating area
     * @operationId deleteSeatFromArea
     */
        deleteSeat: async (layoutId: string, areaId: string, seatId: string) => {
          const response = await this.request<DeleteSeatResponse>(`/venues/${id}/layouts/${layoutId}/areas/${areaId}/seats/${seatId}`, {
            method: 'DELETE'
          });

          return response;
        }
      }
    }),
    {
            /**
     * List venues
     * List all venues for the organisation with optional filtering and pagination
     * @operationId listVenues
     */
        list: async (options?: { search?: string; status?: 'active' | 'archived'; accountId?: string; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.search !== undefined) params.append('search', String(options.search));
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/venues?${queryString}` : `/venues`;

      const response = await this.request<ListVenuesResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Create venue
     * Create a new venue in the organisation
     * @operationId createVenue
     */
        create: async (request: { accountId: string; name: string; description?: string; status?: 'active' | 'archived'; streetAddress?: string; country?: string; coordinates?: { longitude: number; latitude: number }; timezone?: string; phone?: string; email?: string; website?: string; features?: string[]; tags?: string[] }) => {
      const response = await this.request<CreateVenueResponse>(`/venues`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.venue;
        },

            /**
     * Get venue
     * Get a specific venue by ID
     * @operationId getVenue
     */
        get: async (id: string) => {
      const response = await this.request<GetVenueResponse>(`/venues/${id}`, {
        method: 'GET'
      });

      return response.venue;
        },

            /**
     * Update venue
     * Update an existing venue
     * @operationId updateVenue
     */
        update: async (id: string, request: { name?: string; description?: string; status?: 'active' | 'archived'; streetAddress?: string; country?: string; coordinates?: any; timezone?: string; phone?: any; email?: any; website?: any; features?: string[]; tags?: string[] }) => {
      const response = await this.request<UpdateVenueResponse>(`/venues/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.venue;
        },

            /**
     * Delete venue
     * Delete a venue (soft delete)
     * @operationId deleteVenue
     */
        delete: async (id: string) => {
      const response = await this.request<DeleteVenueResponse>(`/venues/${id}`, {
        method: 'DELETE'
      });

      return response;
        }
    }
  );

  /**
   * Billing methods
   */
  billing = {
            /**
     * List credit packages
     * List all available credit packages for purchase
     * @operationId listCreditPackages
     */
        listPackages: async () => {
      const response = await this.request<ListPackagesResponse>(`/billing/packages`, {
        method: 'GET'
      });

      return response.packages;
        },

            /**
     * Check if organisation can sell
     * Check if an organisation has sufficient credits to process sales
     * @operationId checkCanSell
     */
        canSell: async (organisationId: string) => {
      const response = await this.request<CanSellResponse>(`/organisations/${organisationId}/billing/can-sell`, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get credit balance
     * Get the current credit balance for an organisation
     * @operationId getCreditBalance
     */
        getBalance: async () => {
      const response = await this.request<GetBalanceResponse>(`/billing/balance`, {
        method: 'GET'
      });

      return response.balance;
        },

            /**
     * List credit transactions
     * List all credit transactions for an organisation
     * @operationId listCreditTransactions
     */
        listTransactions: async (options?: { page?: string; limit?: string; type?: string }) => {
      const params = new URLSearchParams();
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      if (options?.type !== undefined) params.append('type', String(options.type));
      const queryString = params.toString();
      const requestPath = queryString ? `/billing/transactions?${queryString}` : `/billing/transactions`;

      const response = await this.request<ListTransactionsResponse>(requestPath, {
        method: 'GET'
      });

      return response.transactions;
        },

            /**
     * Purchase credits
     * Purchase a credit package for an organisation
     * @operationId createCreditPurchase
     */
        createPurchase: async (request: CreatePurchaseRequest) => {
      const response = await this.request<PurchaseResult>(`/billing/purchases`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * List invoices
     * List all invoices for an organisation
     * @operationId listInvoices
     */
        listInvoices: async (options?: { page?: string; limit?: string; status?: string }) => {
      const params = new URLSearchParams();
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      if (options?.status !== undefined) params.append('status', String(options.status));
      const queryString = params.toString();
      const requestPath = queryString ? `/billing/invoices?${queryString}` : `/billing/invoices`;

      const response = await this.request<ListInvoicesResponse>(requestPath, {
        method: 'GET'
      });

      return response.invoices;
        },

            /**
     * Get invoice
     * Get a specific invoice by ID
     * @operationId getInvoice
     */
        getInvoice: async (invoiceId: string) => {
      const response = await this.request<GetInvoiceResponse>(`/billing/invoices/${invoiceId}`, {
        method: 'GET'
      });

      return response.invoice;
        },

            /**
     * List billing payments
     * List all billing payments for an organisation
     * @operationId listBillingPayments
     */
        listPayments: async (options?: { page?: string; limit?: string; status?: string }) => {
      const params = new URLSearchParams();
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      if (options?.status !== undefined) params.append('status', String(options.status));
      const queryString = params.toString();
      const requestPath = queryString ? `/billing/payments?${queryString}` : `/billing/payments`;

      const response = await this.request<ListPaymentsResponse>(requestPath, {
        method: 'GET'
      });

      return response.payments;
        },

            /**
     * Create subscription
     * Create a new credit subscription for an organisation
     * @operationId createSubscription
     */
        createSubscription: async (request: CreateSubscriptionRequest) => {
      const response = await this.request<CreateSubscriptionResponse>(`/billing/subscriptions`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.subscription;
        },

            /**
     * List subscriptions
     * List all subscriptions for an organisation
     * @operationId listSubscriptions
     */
        listSubscriptions: async () => {
      const response = await this.request<ListSubscriptionsResponse>(`/billing/subscriptions`, {
        method: 'GET'
      });

      return response.subscriptions;
        },

            /**
     * Cancel subscription
     * Cancel an active subscription
     * @operationId cancelSubscription
     */
        cancelSubscription: async (subscriptionId: string) => {
      const response = await this.request<CancelSubscriptionResponse>(`/billing/subscriptions/${subscriptionId}`, {
        method: 'DELETE'
      });

      return response.subscription;
        },

            /**
     * Get auto top-up configuration
     * Get the auto top-up configuration for an organisation
     * @operationId getAutoTopup
     */
        getAutoTopup: async () => {
      const response = await this.request<GetAutoTopupResponse>(`/billing/auto-topup`, {
        method: 'GET'
      });

      return response.autoTopup;
        },

            /**
     * Update auto top-up configuration
     * Update the auto top-up configuration for an organisation
     * @operationId updateAutoTopup
     */
        updateAutoTopup: async (request: UpdateAutoTopupRequest) => {
      const response = await this.request<UpdateAutoTopupResponse>(`/billing/auto-topup`, {
        method: 'PUT',
        body: JSON.stringify(request)
      });

      return response.autoTopup;
        },

            /**
     * List payment methods
     * List all saved payment methods for the organisation
     * @operationId listPaymentMethods
     */
        listPaymentMethods: async () => {
      const response = await this.request<ListPaymentMethodsResponse>(`/billing/payment-methods`, {
        method: 'GET'
      });

      return response.paymentMethods;
        },

            /**
     * Save payment method
     * Save a payment method after Stripe confirms the setup intent
     * @operationId savePaymentMethod
     */
        savePaymentMethod: async (request: SavePaymentMethodRequest) => {
      const response = await this.request<SavePaymentMethodResponse>(`/billing/payment-methods`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.paymentMethod;
        },

            /**
     * Create setup intent
     * Create a Stripe setup intent for saving a new payment method
     * @operationId createSetupIntent
     */
        createSetupIntent: async () => {
      const response = await this.request<CreateSetupIntentResponse>(`/billing/setup-intent`, {
        method: 'POST'
      });

      return response.clientSecret;
        },

            /**
     * Delete payment method
     * Delete a saved payment method
     * @operationId deletePaymentMethod
     */
        deletePaymentMethod: async (paymentMethodId: string) => {
      const response = await this.request<DeletePaymentMethodResponse>(`/billing/payment-methods/${paymentMethodId}`, {
        method: 'DELETE'
      });

      return response.success;
        },

            /**
     * Set default payment method
     * Set a payment method as the default for the organisation
     * @operationId setDefaultPaymentMethod
     */
        setDefaultPaymentMethod: async (paymentMethodId: string) => {
      const response = await this.request<SetDefaultPaymentMethodResponse>(`/billing/payment-methods/${paymentMethodId}/default`, {
        method: 'PUT'
      });

      return response.paymentMethod;
        }
  };

  /**
   * Inventory methods
   */
  inventory = {
            /**
     * Create inventory
     * Create a new inventory bucket for tracking capacity
     * @operationId createInventory
     */
        create: async (request: { sourceType: 'event_occurrence_area' | 'product'; eventId?: string; eventOccurrenceId?: string; eventLayoutAreaId?: string; productId?: string; totalCapacity: number; isAllocated?: boolean; metadata?: Record<string, any>; accountId: string }) => {
      const response = await this.request<CreateInventoryResponse>(`/inventory`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.inventory;
        },

            /**
     * List inventory
     * List all inventory buckets for the organisation with optional filtering
     * @operationId listInventory
     */
        list: async (options?: { sourceType?: 'event_occurrence_area' | 'product'; eventOccurrenceId?: string; eventId?: string; productId?: string; isAllocated?: 'true' | 'false' }) => {
      const params = new URLSearchParams();
      if (options?.sourceType !== undefined) params.append('sourceType', String(options.sourceType));
      if (options?.eventOccurrenceId !== undefined) params.append('eventOccurrenceId', String(options.eventOccurrenceId));
      if (options?.eventId !== undefined) params.append('eventId', String(options.eventId));
      if (options?.productId !== undefined) params.append('productId', String(options.productId));
      if (options?.isAllocated !== undefined) params.append('isAllocated', String(options.isAllocated));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory?${queryString}` : `/inventory`;

      const response = await this.request<ListInventoryResponse>(requestPath, {
        method: 'GET'
      });

      return response.inventory;
        },

            /**
     * Get inventory
     * Get a specific inventory bucket by ID
     * @operationId getInventory
     */
        get: async (id: string, options?: { accountId: string }) => {
      const params = new URLSearchParams();
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/${id}?${queryString}` : `/inventory/${id}`;

      const response = await this.request<GetInventoryResponse>(requestPath, {
        method: 'GET'
      });

      return response.inventory;
        },

            /**
     * Delete inventory
     * Delete an inventory bucket (only if no confirmed reservations)
     * @operationId deleteInventory
     */
        delete: async (id: string, options?: { accountId: string }) => {
      const params = new URLSearchParams();
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/${id}?${queryString}` : `/inventory/${id}`;

      const response = await this.request<DeleteInventoryResponse>(requestPath, {
        method: 'DELETE'
      });

      return response.message;
        },

            /**
     * Update inventory capacity
     * Update the total capacity of an inventory bucket
     * @operationId updateInventoryCapacity
     */
        updateCapacity: async (id: string, request: { totalCapacity: number; accountId: string }) => {
      const response = await this.request<UpdateInventoryResponse>(`/inventory/${id}/capacity`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.inventory;
        },

            /**
     * Get inventory audit log
     * Get the audit log for an inventory bucket
     * @operationId getInventoryAuditLog
     */
        getAuditLog: async (id: string, options?: { accountId: string }) => {
      const params = new URLSearchParams();
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/${id}/audit-log?${queryString}` : `/inventory/${id}/audit-log`;

      const response = await this.request<GetAuditLogResponse>(requestPath, {
        method: 'GET'
      });

      return response.auditLog;
        }
  };

  /**
   * Inventory Seats methods
   */
  inventorySeats = {
            /**
     * Bulk import seats
     * Import seats into an allocated inventory bucket
     * @operationId bulkImportSeats
     */
        importSeats: async (id: string, request: { seats: { eventLayoutSeatId?: string; rowName: string; seatNumber: string; priceCategory?: string; isAccessible?: boolean; isCompanion?: boolean; attributes?: Record<string, any> }[] }) => {
      const response = await this.request<BulkImportSeatsResponse>(`/inventory/${id}/seats`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * List inventory seats
     * List all seats for an allocated inventory bucket
     * @operationId listInventorySeats
     */
        listSeats: async (id: string, options?: { status?: 'available' | 'reserved' | 'confirmed' | 'held' | 'maintenance'; priceCategory?: string; isAccessible?: 'true' | 'false'; rowName?: string }) => {
      const params = new URLSearchParams();
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.priceCategory !== undefined) params.append('priceCategory', String(options.priceCategory));
      if (options?.isAccessible !== undefined) params.append('isAccessible', String(options.isAccessible));
      if (options?.rowName !== undefined) params.append('rowName', String(options.rowName));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/${id}/seats?${queryString}` : `/inventory/${id}/seats`;

      const response = await this.request<ListSeatsResponse>(requestPath, {
        method: 'GET'
      });

      return response.seats;
        }
  };

  /**
   * Inventory Reservations methods
   */
  inventoryReservations = {
            /**
     * Reserve inventory
     * Create a temporary reservation for GA or allocated seats
     * @operationId reserveInventory
     */
        reserve: async (request: { inventoryId: string; accountId: string; referenceType: 'order' | 'hold' | 'subscription'; referenceId: string; quantity?: number; seatIds?: string[]; ttlSeconds?: number }) => {
      const response = await this.request<ReserveInventoryResponse>(`/inventory/reserve`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.reservation;
        },

            /**
     * Check availability
     * Check if requested quantity is available in inventory
     * @operationId checkAvailability
     */
        checkAvailability: async (request: { requests: { inventoryId: string; quantity?: number; seatIds?: string[] }[] }) => {
      const response = await this.request<CheckAvailabilityResponse>(`/inventory/check-availability`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * List reservations
     * List all reservations with optional filtering
     * @operationId listReservations
     */
        listReservations: async (options?: { inventoryId?: string; accountId?: string; type?: 'temporary' | 'confirmed' | 'hold' | 'maintenance'; referenceType?: 'order' | 'hold' | 'subscription'; referenceId?: string }) => {
      const params = new URLSearchParams();
      if (options?.inventoryId !== undefined) params.append('inventoryId', String(options.inventoryId));
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      if (options?.type !== undefined) params.append('type', String(options.type));
      if (options?.referenceType !== undefined) params.append('referenceType', String(options.referenceType));
      if (options?.referenceId !== undefined) params.append('referenceId', String(options.referenceId));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/reservations?${queryString}` : `/inventory/reservations`;

      const response = await this.request<ListReservationsResponse>(requestPath, {
        method: 'GET'
      });

      return response.reservations;
        },

            /**
     * Get reservation
     * Get a specific reservation by ID
     * @operationId getReservation
     */
        getReservation: async (id: string, options?: { accountId: string }) => {
      const params = new URLSearchParams();
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      const queryString = params.toString();
      const requestPath = queryString ? `/inventory/reservations/${id}?${queryString}` : `/inventory/reservations/${id}`;

      const response = await this.request<GetReservationResponse>(requestPath, {
        method: 'GET'
      });

      return response.reservation;
        },

            /**
     * Confirm reservation
     * Confirm a temporary reservation (converts reserved to confirmed)
     * @operationId confirmReservation
     */
        confirmReservation: async (id: string, request: { accountId: string; referenceType?: 'order' | 'hold' | 'subscription'; referenceId?: string }) => {
      const response = await this.request<ConfirmReservationResponse>(`/inventory/reservations/${id}/confirm`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.reservation;
        },

            /**
     * Release reservation
     * Release a reservation and return inventory to available
     * @operationId releaseReservation
     */
        releaseReservation: async (id: string, request: { accountId: string }) => {
      const response = await this.request<ReleaseReservationResponse>(`/inventory/reservations/${id}/release`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.message;
        },

            /**
     * Extend reservation
     * Extend the expiry time of a temporary reservation
     * @operationId extendReservation
     */
        extendReservation: async (id: string, request: { expiresAt: string }) => {
      const response = await this.request<ExtendReservationResponse>(`/inventory/reservations/${id}/extend`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.reservation;
        }
  };

  /**
   * Inventory Holds methods
   */
  inventoryHolds = {
            /**
     * Create hold
     * Create a hold on inventory (for VIPs, promoters, etc.)
     * @operationId createHold
     */
        createHold: async (request: { inventoryId: string; accountId: string; quantity?: number; seatIds?: string[]; reason: string; heldBy: string; expiresAt?: string }) => {
      const response = await this.request<CreateHoldResponse>(`/inventory/holds`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.reservation;
        },

            /**
     * Release hold
     * Release a hold and return inventory to available
     * @operationId releaseHold
     */
        releaseHold: async (id: string, request: { accountId: string }) => {
      const response = await this.request<ReleaseHoldResponse>(`/inventory/holds/${id}/release`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.message;
        }
  };

  /**
   * Customers methods
   */
  customers = {
            /**
     * Create customer
     * Create a new customer in the organisation
     * @operationId createCustomer
     */
        create: async (request: { accountId?: string; email: string; firstName?: string; lastName?: string; phone?: string; externalId?: string; metadata?: Record<string, any> }) => {
      const response = await this.request<CreateCustomerResponse>(`/customers`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.customer;
        },

            /**
     * List customers
     * List all customers with optional filtering and pagination
     * @operationId listCustomers
     */
        list: async (options?: { search?: string; email?: string; accountId?: string; isBlocked?: string; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.search !== undefined) params.append('search', String(options.search));
      if (options?.email !== undefined) params.append('email', String(options.email));
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      if (options?.isBlocked !== undefined) params.append('isBlocked', String(options.isBlocked));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/customers?${queryString}` : `/customers`;

      const response = await this.request<ListCustomersResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get customer
     * Get a specific customer by ID
     * @operationId getCustomer
     */
        get: async (customerId: string) => {
      const response = await this.request<GetCustomerResponse>(`/customers/${customerId}`, {
        method: 'GET'
      });

      return response.customer;
        },

            /**
     * Update customer
     * Update an existing customer
     * @operationId updateCustomer
     */
        update: async (customerId: string, request: { email?: string; firstName?: any; lastName?: any; phone?: any; externalId?: any; metadata?: any }) => {
      const response = await this.request<UpdateCustomerResponse>(`/customers/${customerId}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.customer;
        },

            /**
     * Block customer
     * Block a customer from making purchases
     * @operationId blockCustomer
     */
        block: async (customerId: string, request: { reason?: string }) => {
      const response = await this.request<BlockCustomerResponse>(`/customers/${customerId}/block`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.customer;
        },

            /**
     * Unblock customer
     * Unblock a previously blocked customer
     * @operationId unblockCustomer
     */
        unblock: async (customerId: string) => {
      const response = await this.request<UnblockCustomerResponse>(`/customers/${customerId}/unblock`, {
        method: 'POST'
      });

      return response.customer;
        }
  };

  /**
   * Orders methods
   */
  orders = {
            /**
     * Create order
     * Create a new order with optional line items
     * @operationId createOrder
     */
        create: async (request: { accountId: string; customerId?: string; currency?: string; channel?: string; isGuestCheckout?: boolean; customerNotes?: string; internalNotes?: string; metadata?: Record<string, any>; expiresInMinutes?: number; items?: { type: 'ticket' | 'product' | 'addon' | 'fee' | 'tax' | 'discount'; name: string; description?: string; unitPrice: string; quantity?: number; ticketDetails?: Record<string, any>; productDetails?: Record<string, any>; feeDetails?: Record<string, any>; metadata?: Record<string, any> }[] }) => {
      const response = await this.request<CreateOrderResponse>(`/orders`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.order;
        },

            /**
     * List orders
     * List all orders with optional filtering and pagination
     * @operationId listOrders
     */
        list: async (options?: { status?: 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled' | 'refunded' | 'expired' | 'failed'; customerId?: string; channel?: string; fromDate?: string; toDate?: string; search?: string; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.customerId !== undefined) params.append('customerId', String(options.customerId));
      if (options?.channel !== undefined) params.append('channel', String(options.channel));
      if (options?.fromDate !== undefined) params.append('fromDate', String(options.fromDate));
      if (options?.toDate !== undefined) params.append('toDate', String(options.toDate));
      if (options?.search !== undefined) params.append('search', String(options.search));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/orders?${queryString}` : `/orders`;

      const response = await this.request<ListOrdersResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get order
     * Get a specific order by ID
     * @operationId getOrder
     */
        get: async (orderId: string) => {
      const response = await this.request<GetOrderResponse>(`/orders/${orderId}`, {
        method: 'GET'
      });

      return response.order;
        },

            /**
     * Update order
     * Update an existing order
     * @operationId updateOrder
     */
        update: async (orderId: string, request: { customerId?: string; customerNotes?: string; internalNotes?: string; metadata?: Record<string, any>; extendExpiry?: boolean; addItems?: { type: 'ticket' | 'product' | 'addon' | 'fee' | 'tax' | 'discount'; name: string; description?: string; unitPrice: string; quantity?: number; ticketDetails?: Record<string, any>; productDetails?: Record<string, any>; feeDetails?: Record<string, any>; metadata?: Record<string, any> }[]; updateItems?: { itemId: string; updates: { quantity?: number; unitPrice?: string; metadata?: Record<string, any> } }[]; removeItems?: string[] }) => {
      const response = await this.request<UpdateOrderResponse>(`/orders/${orderId}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.order;
        },

            /**
     * Get order by number
     * Get a specific order by order number
     * @operationId getOrderByNumber
     */
        getByNumber: async (orderNumber: string) => {
      const response = await this.request<GetOrderResponse>(`/orders/number/${orderNumber}`, {
        method: 'GET'
      });

      return response.order;
        },

            /**
     * Cancel order
     * Cancel an order with a reason
     * @operationId cancelOrder
     */
        cancel: async (orderId: string, request: { reason: string }) => {
      const response = await this.request<CancelOrderResponse>(`/orders/${orderId}/cancel`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.order;
        },

            /**
     * Transition order status
     * Transition an order to a new status
     * @operationId transitionOrderStatus
     */
        transitionStatus: async (orderId: string, request: { status: 'confirmed' | 'processing' | 'completed' | 'cancelled' | 'refunded' | 'expired' | 'failed' }) => {
      const response = await this.request<TransitionOrderStatusResponse>(`/orders/${orderId}/status`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.order;
        },

            /**
     * Validate order
     * Validate an order before payment (check inventory, pricing, etc.)
     * @operationId validateOrder
     */
        validate: async (orderId: string, request: {  }) => {
      const response = await this.request<ValidateOrderResponse>(`/orders/${orderId}/validate`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Add line item
     * Add a line item to an order
     * @operationId addOrderLineItem
     */
        addItem: async (orderId: string, request: { type: 'ticket' | 'product' | 'addon' | 'fee' | 'tax' | 'discount'; name: string; description?: string; unitPrice: string; quantity?: number; ticketDetails?: Record<string, any>; productDetails?: Record<string, any>; feeDetails?: Record<string, any>; metadata?: Record<string, any> }) => {
      const response = await this.request<AddLineItemResponse>(`/orders/${orderId}/items`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Update line item
     * Update a line item in an order
     * @operationId updateOrderLineItem
     */
        updateItem: async (orderId: string, itemId: string, request: { quantity?: number; unitPrice?: string; metadata?: Record<string, any> }) => {
      const response = await this.request<UpdateLineItemResponse>(`/orders/${orderId}/items/${itemId}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Remove line item
     * Remove a line item from an order
     * @operationId removeOrderLineItem
     */
        removeItem: async (orderId: string, itemId: string) => {
      const response = await this.request<RemoveLineItemResponse>(`/orders/${orderId}/items/${itemId}`, {
        method: 'DELETE'
      });

      return response.order;
        },

            /**
     * Initiate payment
     * Initiate payment for an order
     * @operationId initiateOrderPayment
     */
        initiatePayment: async (orderId: string, request: { paymentMethod: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'; returnUrl?: string; metadata?: Record<string, any> }) => {
      const response = await this.request<InitiatePaymentResponse>(`/orders/${orderId}/payment`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response;
        },

            /**
     * Get payment status
     * Get the current payment status for an order
     * @operationId getOrderPaymentStatus
     */
        getPaymentStatus: async (orderId: string) => {
      const response = await this.request<GetPaymentStatusResponse>(`/orders/${orderId}/payment/status`, {
        method: 'GET'
      });

      return response;
        }
  };

  /**
   * Payments methods
   */
  payments = {
            /**
     * Create payment
     * Create a new payment for an order
     * @operationId createPayment
     */
        create: async (request: { accountId: string; orderId: string; orderNumber: string; amount: number; currency: string; paymentType: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'; paymentProviderId?: string; returnUrl?: string; isPartialPayment?: boolean; remainingBalance?: number; metadata?: Record<string, any> }) => {
      const response = await this.request<CreatePaymentResponse>(`/payments`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.payment;
        },

            /**
     * List payments
     * List all payments with optional filtering and pagination
     * @operationId listPayments
     */
        list: async (options?: { orderId?: string; status?: 'created' | 'pending' | 'requires_action' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'expired'; paymentType?: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'; paymentProviderId?: string; fromDate?: string; toDate?: string; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.orderId !== undefined) params.append('orderId', String(options.orderId));
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.paymentType !== undefined) params.append('paymentType', String(options.paymentType));
      if (options?.paymentProviderId !== undefined) params.append('paymentProviderId', String(options.paymentProviderId));
      if (options?.fromDate !== undefined) params.append('fromDate', String(options.fromDate));
      if (options?.toDate !== undefined) params.append('toDate', String(options.toDate));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/payments?${queryString}` : `/payments`;

      const response = await this.request<any>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get payment
     * Get a specific payment by ID
     * @operationId getPayment
     */
        get: async (paymentId: string) => {
      const response = await this.request<GetPaymentResponse>(`/payments/${paymentId}`, {
        method: 'GET'
      });

      return response.payment;
        },

            /**
     * Cancel payment
     * Cancel a pending payment
     * @operationId cancelPayment
     */
        cancel: async (paymentId: string, request: { reason?: string }) => {
      const response = await this.request<CancelPaymentResponse>(`/payments/${paymentId}/cancel`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.payment;
        },

            /**
     * Create refund
     * Create a refund for a payment
     * @operationId createPaymentRefund
     */
        createRefund: async (paymentId: string, request: { amount: number; reason: string; notes?: string; metadata?: Record<string, any> }) => {
      const response = await this.request<CreateRefundResponse>(`/payments/${paymentId}/refunds`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.refund;
        },

            /**
     * List refunds
     * List all refunds for a specific payment
     * @operationId listPaymentRefunds
     */
        listRefunds: async (paymentId: string) => {
      const response = await this.request<ListRefundsResponse>(`/payments/${paymentId}/refunds`, {
        method: 'GET'
      });

      return response.refunds;
        }
  };

  /**
   * Payment Providers methods
   */
  paymentProviders = {
            /**
     * Create payment provider
     * Create a new payment provider configuration
     * @operationId createPaymentProvider
     */
        create: async (request: { accountId?: string; type: 'stripe_connect' | 'stripe_direct' | 'adyen' | 'square' | 'paypal' | 'cash' | 'bank_transfer'; name: string; description?: string; integrationType?: 'ticketlayer_pay' | 'self_service'; integrationServiceUrl?: string; integrationServiceVersion?: string; configuration: Record<string, any>; supportedPaymentTypes: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'[]; capabilities?: { supportsInstantCapture?: boolean; supportsDelayedCapture?: boolean; supportsRefunds?: boolean; supportsPartialRefunds?: boolean; requiresCustomerAction?: boolean; supportedCurrencies?: string[]; maxAmount?: number; minAmount?: number }; isDefault?: boolean; priority?: number; feeStructure?: { type: 'percentage' | 'fixed' | 'percentage_plus_fixed'; percentage?: number; fixed?: number; currency?: string }; applicationFee?: { type: 'percentage' | 'fixed'; value: number }; metadata?: Record<string, any> }) => {
      const response = await this.request<CreatePaymentProviderResponse>(`/payment-providers`, {
        method: 'POST',
        body: JSON.stringify(request)
      });

      return response.provider;
        },

            /**
     * List payment providers
     * List all payment providers with optional filtering and pagination
     * @operationId listPaymentProviders
     */
        list: async (options?: { accountId?: string; type?: 'stripe_connect' | 'stripe_direct' | 'adyen' | 'square' | 'paypal' | 'cash' | 'bank_transfer'; status?: 'active' | 'inactive' | 'pending_setup'; paymentType?: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'; isDefault?: string; integrationType?: 'ticketlayer_pay' | 'self_service'; page?: string; limit?: string }) => {
      const params = new URLSearchParams();
      if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
      if (options?.type !== undefined) params.append('type', String(options.type));
      if (options?.status !== undefined) params.append('status', String(options.status));
      if (options?.paymentType !== undefined) params.append('paymentType', String(options.paymentType));
      if (options?.isDefault !== undefined) params.append('isDefault', String(options.isDefault));
      if (options?.integrationType !== undefined) params.append('integrationType', String(options.integrationType));
      if (options?.page !== undefined) params.append('page', String(options.page));
      if (options?.limit !== undefined) params.append('limit', String(options.limit));
      const queryString = params.toString();
      const requestPath = queryString ? `/payment-providers?${queryString}` : `/payment-providers`;

      const response = await this.request<ListPaymentProvidersResponse>(requestPath, {
        method: 'GET'
      });

      return response;
        },

            /**
     * Get default payment provider
     * Get the default payment provider for the account/organisation
     * @operationId getDefaultPaymentProvider
     */
        getDefault: async () => {
      const response = await this.request<GetPaymentProviderResponse>(`/payment-providers/default`, {
        method: 'GET'
      });

      return response.provider;
        },

            /**
     * Get payment provider
     * Get a specific payment provider by ID
     * @operationId getPaymentProvider
     */
        get: async (providerId: string) => {
      const response = await this.request<GetPaymentProviderResponse>(`/payment-providers/${providerId}`, {
        method: 'GET'
      });

      return response.provider;
        },

            /**
     * Update payment provider
     * Update an existing payment provider configuration
     * @operationId updatePaymentProvider
     */
        update: async (providerId: string, request: { name?: string; description?: string; status?: 'active' | 'inactive' | 'pending_setup'; integrationServiceUrl?: string; integrationServiceVersion?: string; configuration?: Record<string, any>; supportedPaymentTypes?: 'online_card' | 'online_bank_transfer' | 'online_wallet' | 'in_person_card' | 'in_person_cash' | 'bank_transfer' | 'cheque'[]; capabilities?: { supportsInstantCapture?: boolean; supportsDelayedCapture?: boolean; supportsRefunds?: boolean; supportsPartialRefunds?: boolean; requiresCustomerAction?: boolean; supportedCurrencies?: string[]; maxAmount?: number; minAmount?: number }; isDefault?: boolean; priority?: number; feeStructure?: { type: 'percentage' | 'fixed' | 'percentage_plus_fixed'; percentage?: number; fixed?: number; currency?: string }; applicationFee?: { type: 'percentage' | 'fixed'; value: number }; metadata?: Record<string, any> }) => {
      const response = await this.request<UpdatePaymentProviderResponse>(`/payment-providers/${providerId}`, {
        method: 'PATCH',
        body: JSON.stringify(request)
      });

      return response.provider;
        },

            /**
     * Delete payment provider
     * Delete a payment provider (soft delete)
     * @operationId deletePaymentProvider
     */
        delete: async (providerId: string) => {
      const response = await this.request<DeletePaymentProviderResponse>(`/payment-providers/${providerId}`, {
        method: 'DELETE'
      });

      return response;
        }
  };
}
