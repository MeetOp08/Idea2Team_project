/**
 * Application Constants
 * 
 * General configuration and constants used throughout the application.
 */

// Application Metadata
export const APP_NAME = "Idea2Team Admin";
export const APP_VERSION = "1.0.0";
export const APP_DESCRIPTION = "Administration panel for Idea2Team platform";

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  MODERATOR: "moderator",
  USER: "user",
  GUEST: "guest",
};

// User Status
export const USER_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  BLOCKED: "Blocked",
  PENDING: "Pending",
  SUSPENDED: "Suspended",
};

// Project Status
export const PROJECT_STATUS = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  ARCHIVED: "Archived",
  DRAFT: "Draft",
};

// Pagination Defaults
export const PAGINATION_DEFAULTS = {
  PAGE_SIZE: 10,
  PAGE_SIZES: [10, 25, 50, 100],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: "MMM DD, YYYY",
  FORM: "YYYY-MM-DD",
  ISO: "YYYY-MM-DDTHH:mm:ss.SSSZ",
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: "adminToken",
  REFRESH_TOKEN: "refreshToken",
  USER_PREFERENCES: "userPreferences",
  SIDEBAR_STATE: "sidebarCollapsed",
};

// Environment
export const ENVIRONMENT = process.env.NODE_ENV || "development";
export const IS_DEVELOPMENT = ENVIRONMENT === "development";
export const IS_PRODUCTION = ENVIRONMENT === "production";

export default {
  APP_NAME,
  APP_VERSION,
  USER_ROLES,
  USER_STATUS,
  PROJECT_STATUS,
  PAGINATION_DEFAULTS,
  LOCAL_STORAGE_KEYS,
};
