/**
 * Constants Export
 * 
 * Central export point for all application constants.
 * Import specific constants from this file:
 * 
 * import { APP_NAME, API_ENDPOINTS, COLORS } from './constants';
 */

export * from "./app.js";
export * from "./api.js";
export * from "./colors.js";

import appConstants from "./app.js";
import apiConstants from "./api.js";
import colorConstants from "./colors.js";

export default {
  ...appConstants,
  ..apiConstants,
  ...colorConstants,
};
