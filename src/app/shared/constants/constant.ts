import {environment} from "../../../environments/environment";

const API_PREFIX = "/api/";
const hostOrigin = window.location.origin;
let subDomain = hostOrigin.substring(hostOrigin.indexOf("/") + 2, hostOrigin.indexOf("."));
subDomain = subDomain !== "" ? subDomain + "." : "";
export const SERVER_URL = `${window.location.protocol}//${environment.baseUrl + API_PREFIX}`;
export const REGISTRATION_PATH = "register";
export const AUTH_PATH = "auth/";
export const DASHBOARD = "/dashboards";
export const EMPLOYEE_PATH = "employees";
export const ROLE_PATH = "roles";
//export const PERMISSION_PATH = "permissions";
