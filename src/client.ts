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
type AddSeatResponse = components['schemas']['AddSeatResponse'];
type AssignRoleRequest = components['schemas']['AssignRoleRequest'];
type AssignRoleResponse = components['schemas']['AssignRoleResponse'];
type BulkAddSeatsResponse = components['schemas']['BulkAddSeatsResponse'];
type CreateAccountResponse = components['schemas']['CreateAccountResponse'];
type CreateEventOccurrenceResponse = components['schemas']['CreateEventOccurrenceResponse'];
type CreateEventResponse = components['schemas']['CreateEventResponse'];
type CreateRoleRequest = components['schemas']['CreateRoleRequest'];
type CreateRoleResponse = components['schemas']['CreateRoleResponse'];
type CreateUserInvitationRequest = components['schemas']['CreateUserInvitationRequest'];
type CreateUserInvitationResponse = components['schemas']['CreateUserInvitationResponse'];
type CreateVenueLayoutResponse = components['schemas']['CreateVenueLayoutResponse'];
type CreateVenueResponse = components['schemas']['CreateVenueResponse'];
type DeleteAccountResponse = components['schemas']['DeleteAccountResponse'];
type DeleteAreaResponse = components['schemas']['DeleteAreaResponse'];
type DeleteCategoryResponse = components['schemas']['DeleteCategoryResponse'];
type DeleteEventOccurrenceResponse = components['schemas']['DeleteEventOccurrenceResponse'];
type DeleteEventResponse = components['schemas']['DeleteEventResponse'];
type DeleteRoleResponse = components['schemas']['DeleteRoleResponse'];
type DeleteSeatResponse = components['schemas']['DeleteSeatResponse'];
type DeleteUserInvitationResponse = components['schemas']['DeleteUserInvitationResponse'];
type DeleteVenueLayoutResponse = components['schemas']['DeleteVenueLayoutResponse'];
type DeleteVenueResponse = components['schemas']['DeleteVenueResponse'];
type GenerateSeatsResponse = components['schemas']['GenerateSeatsResponse'];
type GetAccountResponse = components['schemas']['GetAccountResponse'];
type GetEventOccurrenceResponse = components['schemas']['GetEventOccurrenceResponse'];
type GetEventResponse = components['schemas']['GetEventResponse'];
type GetIdentityProviderResponse = components['schemas']['GetIdentityProviderResponse'];
type GetMeOrganisationsResponse = components['schemas']['GetMeOrganisationsResponse'];
type GetMePermissionsResponse = components['schemas']['GetMePermissionsResponse'];
type GetMeResponse = components['schemas']['GetMeResponse'];
type GetMeRolesResponse = components['schemas']['GetMeRolesResponse'];
type GetOrganisationResponse = components['schemas']['GetOrganisationResponse'];
type GetRoleResponse = components['schemas']['GetRoleResponse'];
type GetUserInvitationResponse = components['schemas']['GetUserInvitationResponse'];
type GetVenueLayoutResponse = components['schemas']['GetVenueLayoutResponse'];
type GetVenueResponse = components['schemas']['GetVenueResponse'];
type ListAccountsResponse = components['schemas']['ListAccountsResponse'];
type ListEventOccurrencesResponse = components['schemas']['ListEventOccurrencesResponse'];
type ListEventsResponse = components['schemas']['ListEventsResponse'];
type ListIdentityProvidersResponse = components['schemas']['ListIdentityProvidersResponse'];
type ListRolesResponse = components['schemas']['ListRolesResponse'];
type ListUserAccountRolesResponse = components['schemas']['ListUserAccountRolesResponse'];
type ListUserInvitationsResponse = components['schemas']['ListUserInvitationsResponse'];
type ListVenueLayoutsResponse = components['schemas']['ListVenueLayoutsResponse'];
type ListVenuesResponse = components['schemas']['ListVenuesResponse'];
type LoginRequest = components['schemas']['LoginRequest'];
type LoginResponse = components['schemas']['LoginResponse'];
type RedeemInvitationRequest = components['schemas']['RedeemInvitationRequest'];
type RedeemInvitationResponse = components['schemas']['RedeemInvitationResponse'];
type RefreshTokenRequest = components['schemas']['RefreshTokenRequest'];
type RefreshTokenResponse = components['schemas']['RefreshTokenResponse'];
type RemoveAssignmentResponse = components['schemas']['RemoveAssignmentResponse'];
type ResendUserInvitationResponse = components['schemas']['ResendUserInvitationResponse'];
type SyncSeatsResponse = components['schemas']['SyncSeatsResponse'];
type UpdateAccountResponse = components['schemas']['UpdateAccountResponse'];
type UpdateAreaResponse = components['schemas']['UpdateAreaResponse'];
type UpdateCategoryResponse = components['schemas']['UpdateCategoryResponse'];
type UpdateEventOccurrenceResponse = components['schemas']['UpdateEventOccurrenceResponse'];
type UpdateEventResponse = components['schemas']['UpdateEventResponse'];
type UpdateIdentityProviderRequest = components['schemas']['UpdateIdentityProviderRequest'];
type UpdateIdentityProviderResponse = components['schemas']['UpdateIdentityProviderResponse'];
type UpdateOrganisationRequest = components['schemas']['UpdateOrganisationRequest'];
type UpdateOrganisationResponse = components['schemas']['UpdateOrganisationResponse'];
type UpdateRoleRequest = components['schemas']['UpdateRoleRequest'];
type UpdateRoleResponse = components['schemas']['UpdateRoleResponse'];
type UpdateSeatResponse = components['schemas']['UpdateSeatResponse'];
type UpdateUserAccountRolesRequest = components['schemas']['UpdateUserAccountRolesRequest'];
type UpdateUserAccountRolesResponse = components['schemas']['UpdateUserAccountRolesResponse'];
type UpdateVenueLayoutResponse = components['schemas']['UpdateVenueLayoutResponse'];
type UpdateVenueResponse = components['schemas']['UpdateVenueResponse'];

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
    return this.code === 'AUTHENTICATION_REQUIRED' || this.code === 'INVALID_TOKEN';
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
      
      throw new BackstageAPIError(message, code, response.status);
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
   * Use events() to access nested resources: events(id).occurrences
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
      create: async (request: { startDate: string; startTime: string; endDate: string; endTime: string; timezone?: string; venueId?: string; status: 'draft' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled' }) => {
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
      update: async (occurrenceId: string, request: { startDate?: string; startTime?: string; endDate?: string; endTime?: string; timezone?: string; venueId?: any; status?: 'draft' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled' }) => {
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
      }
    }),
    {
        /**
         * List events
         * List all events for the organisation with optional filtering and pagination
         * @operationId listEvents
         */
        list: async (options?: { search?: string; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: string; accountId?: string; page?: string; limit?: string }) => {
          const params = new URLSearchParams();
          if (options?.search !== undefined) params.append('search', String(options.search));
          if (options?.status !== undefined) params.append('status', String(options.status));
          if (options?.venueId !== undefined) params.append('venueId', String(options.venueId));
          if (options?.accountId !== undefined) params.append('accountId', String(options.accountId));
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
        create: async (request: { accountId: string; name: string; description?: string; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: string; timezone?: string; onSaleDate?: string; offSaleDate?: string; tags?: string[] }) => {
          const response = await this.request<CreateEventResponse>(`/events`, {
            method: 'POST',
            body: JSON.stringify(request)
          });
    
          return response.event;
        },

        /**
         * Get event
         * Get a specific event by ID
         * @operationId getEvent
         */
        get: async (id: string) => {
          const response = await this.request<GetEventResponse>(`/events/${id}`, {
            method: 'GET'
          });
    
          return response.event;
        },

        /**
         * Update event
         * Update an existing event
         * @operationId updateEvent
         */
        update: async (id: string, request: { name?: string; description?: string; status?: 'draft' | 'published' | 'on_sale' | 'sold_out' | 'completed' | 'cancelled'; venueId?: any; timezone?: string; onSaleDate?: any; offSaleDate?: any; tags?: string[] }) => {
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
      create: async (request: { name: string; description?: string; status?: 'active' | 'archived'; totalCapacity?: number; floors?: { id?: string; name: string; displayOrder: number; description?: string }[]; categories?: { id?: string; name: string; description?: string; displayOrder: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; floorId?: string; capacity: number; displayOrder: number; color?: string; sections?: { id?: string; name: string; displayOrder: number; description?: string }[]; position?: { x: number; y: number; width: number; height: number }; seats?: { id?: string; sectionId?: string; section?: string; row: string; number: string; label: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[] }[]; tags?: string[] }) => {
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
      update: async (layoutId: string, request: { name?: string; description?: string; status?: 'active' | 'archived'; totalCapacity?: number; floors?: { id?: string; name: string; displayOrder: number; description?: string }[]; categories?: { id?: string; name: string; description?: string; displayOrder: number; color?: string }[]; areas?: { id?: string; name: string; description?: string; type: 'unallocated' | 'allocated'; status?: 'active' | 'inactive'; floorId?: string; capacity: number; displayOrder: number; color?: string; sections?: { id?: string; name: string; displayOrder: number; description?: string }[]; position?: { x: number; y: number; width: number; height: number }; seats?: { id?: string; sectionId?: string; section?: string; row: string; number: string; label: string; categoryId?: string; status?: 'available' | 'blocked' | 'accessible' | 'held' | 'removed'; holdType?: string; attributes?: 'aisle_left' | 'aisle_right' | 'accessible' | 'wheelchair_space' | 'companion_seat' | 'easy_access' | 'obstructed_view' | 'restricted_view' | 'excellent_view' | 'stage_view' | 'extra_legroom' | 'premium_comfort' | 'front_row' | 'back_row' | 'center'[]; companionSeats?: string[]; companionTo?: string; position?: { x: number; y: number; rotation?: number }; internalNotes?: string; publicNotes?: string }[] }[]; tags?: string[] }) => {
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
}
