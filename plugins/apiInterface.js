import path from "path";
import { parseUrl } from "~/utils/urlParse";
// import config from "../../config";
//const config = process;
//import { getOS } from "~/utils/platform";
// import pkg from "../../../package.json";
import storageHelper from "~/utils/storageHelper";
// import env from "../../../env";
import responseHandler from "~/utils/responseHandler";

const baseUrl = process.env.BASE_URL || process.env._BACKEND_BASE_URL;
const isDevelopment = process.env.NODE_ENV === "development";
const baseUrlParts = parseUrl(
  // isDevelopment ? process.env._PROXYED_BACKEND_URL || baseUrl : baseUrl
  baseUrl
);

if (!baseUrlParts) {
  throw new Error(
    "miss configured backend logic base ulr >>> BACKEND_BASE_URL"
  );
}

const baseUrlProtocol = baseUrlParts.protocol;
const baseUrlDomainAndPath = `${baseUrlParts.origin}/${baseUrlParts.path}`;

function httpMethodFactory(interfaceObject, httpVerb) {
  interfaceObject.apiCall[httpVerb] = function(url, options = {}) {
    options.method = httpVerb.toUpperCase();
    return interfaceObject.apiCall(url, options);
  };
}

function setHttpHeaders(options, headers) {
  // options.headers["Client-Value"] = btoa(JSON.stringify(getDeviceInfo()));
  options.headers["Client-Value"] = process.env.CLIENT_VALUE;
  options.headers["Client-Key"] = process.env.CLIENT_KEY;

  //options.headers["client"] = "pwa";
}

function ApiInterface(apiOptions = {}) {
  this.options = apiOptions;
  const { onSessionExpire } = this.options;

  this.apiCall = async (url, options = {}) => {
    const token =
      this.options.getToken && !options.disableToken
        ? await this.options.getToken()
        : null;

    options.headers = options.headers || {};

    if (token) {
      let tempToken = null;
      if (token[token.length - 1] === "i") {
        tempToken = token.substring(0, token.length - 1);
      } else {
        tempToken = token;
      }
      options.headers.Authorization = `${tempToken}`;
    }

    setHttpHeaders(options, {
      //Platform: getOS() + "-PWA",
      LimooVersion: "1.0.0",
    });

    const engine = options.engine;

    const { handleResult } = responseHandler();
    return engine(url, options).then(result => {
      handleResult(result);
      return result;
    }).catch((error) => {
      handleResult(error);
      if (error.response.status === 401) {
        storageHelper.clearLocalStorage();
        sessionStorage.setItem('previousRoute', window.location.pathname);
        window.location && (window.location.pathname = "");
      }
    }).catch((error) => {
      throw error;
    })
  };

  httpMethodFactory(this, "get");
  httpMethodFactory(this, "post");
  httpMethodFactory(this, "put");
  httpMethodFactory(this, "delete");
  httpMethodFactory(this, "head");
}

ApiInterface.prototype.fromBaseUrl = function(apiPath) {
  return baseUrlProtocol + path.join(baseUrlDomainAndPath, apiPath);
};

const ApiPrototype = ApiInterface.prototype;

function createApiInterface(options) {
  return new ApiInterface(options);
}

export default createApiInterface;

export { ApiPrototype, createApiInterface };
