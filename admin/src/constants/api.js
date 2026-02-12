/**
 * API Configuration and Endpoints
 * 
 * Centralized API configuration for all backend communication.
 * Environment variables can be used for different deployment environments.
 */

// API Base URL - Use environment variable or default
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    logout: `${API_BASE_URL}/auth/logout`,
    refresh: `${API_BASE_URL}/auth/refresh`,
  },

  // Users
  users: {
    list: `${API_BASE_URL}/users`,
    create: `${API_BASE_URL}/users`,
    get: (id) => `${API_BASE_URL}/users/${id}`,
    update: (id) => `${API_BASE_URL}/users/${id}`,
    delete: (id) => `${API_BASE_URL}/users/${id}`,
    block: (id) => `${API_BASE_URL}/users/${id}/block`,
  },

  // Projects
  projects: {
    list: `${API_BASE_URL}/projects`,
    create: `${API_BASE_URL}/projects`,
    get: (id) => `${API_BASE_URL}/projects/${id}`,
    update: (id) => `${API_BASE_URL}/projects/${id}`,
    delete: (id) => `${API_BASE_URL}/projects/${id}`,
  },

  // Reports
  reports: {
    list: `${API_BASE_URL}/reports`,
    create: `${API_BASE_URL}/reports`,
    get: (id) => `${API_BASE_URL}/reports/${id}`,
  },

  // Analytics
  analytics: {
    dashboard: `${API_BASE_URL}/analytics/dashboard`,
    users: `${API_BASE_URL}/analytics/users`,
    projects: `${API_BASE_URL}/analytics/projects`,
  },
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// Request Timeout (ms)
export const REQUEST_TIMEOUT = 30000;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

export default API_ENDPOINTS;
