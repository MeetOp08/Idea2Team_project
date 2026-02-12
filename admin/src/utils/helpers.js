/**
 * Utility Helper Functions
 * 
 * Common utility functions used throughout the application for:
 * - String formatting
 * - Date manipulation
 * - Array operations
 * - Validation
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Formats a date string to a readable format
 * @param {string | Date} date - The date to format
 * @param {string} format - The format pattern (default: "MMM DD, YYYY")
 * @returns {string} The formatted date
 */
export const formatDate = (date, format = "MMM DD, YYYY") => {
  if (!date) return "";
  const d = new Date(date);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const day = String(d.getDate()).padStart(2, "0");
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return format
    .replace("MMM", month)
    .replace("DD", day)
    .replace("YYYY", year);
};

/**
 * Formats a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: "USD")
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (amount, currency = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * Truncates a string to a specified length with ellipsis
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length
 * @returns {string} The truncated string
 */
export const truncateString = (str, length = 50) => {
  if (!str) return "";
  return str.length > length ? str.substring(0, length) + "..." : str;
};

/**
 * Debounces a function
 * @param {Function} func - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} The debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttles a function
 * @param {Function} func - The function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} The throttled function
 */
export const throttle = (func, limit = 1000) => {
  let inThrottle;
  return function throttled(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a password
 * @param {string} password - The password to validate
 * @param {number} minLength - Minimum password length (default: 8)
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidPassword = (password, minLength = 8) => {
  if (!password || password.length < minLength) return false;
  return true;
};

/**
 * Generates a unique ID
 * @returns {string} A unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Checks if an object is empty
 * @param {Object} obj - The object to check
 * @returns {boolean} True if empty, false otherwise
 */
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Deep clones an object
 * @param {Object} obj - The object to clone
 * @returns {Object} A deep cloned copy
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Gets the initials from a name
 * @param {string} name - The full name
 * @returns {string} The initials
 */
export const getInitials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Sorts an array of objects by a property
 * @param {Array} array - The array to sort
 * @param {string} property - The property to sort by
 * @param {string} order - Sort order ("asc" or "desc")
 * @returns {Array} The sorted array
 */
export const sortByProperty = (array, property, order = "asc") => {
  return [...array].sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
};

export default {
  capitalize,
  formatDate,
  formatCurrency,
  truncateString,
  debounce,
  throttle,
  isValidEmail,
  isValidPassword,
  generateId,
  isEmptyObject,
  deepClone,
  getInitials,
  sortByProperty,
};
