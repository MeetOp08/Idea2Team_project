/**
 * Color Constants
 * 
 * Centralized color definitions used throughout the application.
 * These match the CSS variables defined in App.css
 */

export const COLORS = {
  // Primary Colors
  primary: "#2563eb",
  primaryDark: "#1e40af",
  secondary: "#64748b",

  // Status Colors
  success: "#16a34a",
  danger: "#dc2626",
  dangerDark: "#b91c1c",
  warning: "#ea580c",
  info: "#3b82f6",

  // Neutral Colors
  dark: "#0b1120",
  darkSecondary: "#0f172a",
  light: "#f3f4f6",
  lightSecondary: "#e5e7eb",
  white: "#ffffff",

  // Text Colors
  text: "#1f2937",
  textMuted: "#6b7280",
};

export const STATUS_COLORS = {
  active: COLORS.success,
  inactive: COLORS.danger,
  pending: COLORS.warning,
  blocked: COLORS.danger,
};

export default COLORS;
