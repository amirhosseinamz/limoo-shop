// import path from "path";
// import { parseUrl } from "@Utils/urlParser";
// import config from "../../config";
// import { getOS } from "@Utils/platform";
// import pkg from "../../../package.json";
// import storageHelper from "@Utils/storageHelper";
// import env from "../../../env";
// import useResponseHandler from "@Utils/useResponseHandler";
//
// const baseUrl = config.env._I_BACKEND_BASE_URL || config.env._BACKEND_BASE_URL;
// const isDevelopment = config.env.NODE_ENV === "development";
// const baseUrlParts = parseUrl(
//   isDevelopment ? config.env._PROXYED_BACKEND_URL || baseUrl : baseUrl
// );
//
// if (!baseUrlParts) {
//   throw new Error(
//     "miss configured backend logic base ulr >>> BACKEND_BASE_URL"
//   );
// }
//
// const baseUrlProtocol = baseUrlParts.protocol;
// const baseUrlDomainAndPath = `${baseUrlParts.origin}/${baseUrlParts.path}`;
//
// function httpMethodFactory(interfaceObject, httpVerb) {
//   interfaceObject.apiCall[httpVerb] = function(url, options = {}) {
//     options.method = httpVerb.toUpperCase();
//     return interfaceObject.apiCall(url, options);
//   };
// }
//
// function setHttpHeaders(options, headers) {
//   // options.headers["Client-Value"] = btoa(JSON.stringify(getDeviceInfo()));
//   options.headers["Client-Value"] = "eyJvc19uYW1lIjoiTWFjaW50b3NoIiwiYnJvd3Nlcl9uYW1lIjoiQ2hyb21lIiwib3JpZW50YXRpb24iOiJMYW5kc2NhcGUiLCJvc192ZXJzaW9uIjoiMTAuMTU3IiwiYnJvd3Nlcl92ZXJzaW9uIjoiOTQuMDQ2MDY2MSIsIm1pbWV0eXBlcyI6ImZhbHNlIiwiaGlzdG9yeV9jb3VudCI6IjEwIiwicGFnZV92aXNpYmlsaXR5Ijoie1wiTGFzdFZpc2libGVcIjpcIiBHTVQrMzozMFwiLFwiTGFzdEhpZGRlblwiOlwiVGh1LCBTZXAgMzAsIDIwMjEsIDExOjMzOjUzJm5ic3A7IChVVEMrMDM6MzAgR01UKzM6MzApIChEU1Q6IClcIixcIkluaXRpYWxseVZpc2libGVcIjpcIiswMzMwIChJcmFuIFN0YW5kYXJkIFRpbWUpXCJ9IiwibmF2aWdhdG9yX3VzZXJhZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85NC4wLjQ2MDYuNjEgU2FmYXJpLzUzNy4zNiIsIm5hdmlnYXRvcl9wbGF0Zm9ybSI6Ik1hY0ludGVsIiwibmF2aWdhdG9yX3ZlbmRvciI6Ikdvb2dsZSBJbmMuIiwibGFuZ3VhZ2UiOiJlbi1VUyIsImxhbmd1YWdlcyI6IltcImVuLVVTXCIsXCJlblwiXSIsImxvZ2ljYWxfcHJvY2Vzc29yX2NvcmVzIjoiOCIsIm1lbW9yeSI6IjgiLCJjb25uZWN0aW9uX3R5cGUiOiI0ZyIsImJhdHRlcnlfbGV2ZWwiOiIxMDAiLCJpc19jaGFyZ2luZyI6InRydWUiLCJkaXNjaGFyZ2luZ190aW1lIjoibnVsbCIsIm1heF90b3VjaF9wb2ludHMiOiIwIiwicGx1Z2luc19udW1iZXIiOiI1IiwiYnJvd3Nlcl9idWlsZF9udW1iZXIiOiIyMDAzMDEwNyIsImNvb2tpZV9lbmFibGVkIjoidHJ1ZSIsImdwdSI6IkFOR0xFIChJbnRlbCBJbmMuLCBJbnRlbChSKSBJcmlzKFRNKSBQbHVzIEdyYXBoaWNzIDY1NSwgT3BlbkdMIDQuMSBJTlRFTC0xNC43LjE3KSIsImdwdV92ZW5kb3IiOiJHb29nbGUgSW5jLiAoSW50ZWwgSW5jLikiLCJzY3JlZW5fd2lkdGgiOiIxNDQwIiwic2NyZWVuX2hlaWdodCI6IjkwMCIsInNjcmVlbl9waXhlbF9kZXB0aCI6IjMwIiwiYWNjZWxlcmF0aW9uIjoibnVsbCIsImJyb3dzZXJfaW5uZXJfd2lkdGgiOiI3MzIiLCJicm93c2VyX2lubmVyX2hlaWdodCI6IjcxNyIsImJyb3dzZXJfb3V0ZXJfd2lkdGgiOiIxNDQwIiwiYnJvd3Nlcl9vdXRlcl9oZWlnaHQiOiI4MjgiLCJmcm9udGVuZF91cmwiOiJodHRwczovL3dlYi1kZXZlbG9wLmRpdmVyLmlyL2hvbWUiLCJyZW1vdGVfdXVpZCI6ImFkMTRlZDgzLWY4MmUtNDUzOC1iYTIxLWM2N2RhZGViN2UzYSIsImxhdW5jaF91dWlkIjoiYmI1MDA3YjctZDRkOS00MGQ2LThjYzAtM2E3ZWZkMzUyZGE5In0=";
//   options.headers["Client-Key"] = env._CLIENT_KEY;
//   options.headers["client"] = "pwa";
// }
//
// function ApiInterface(apiOptions = {}) {
//   this.options = apiOptions;
//   const { onSessionExpire } = this.options;
//
//   this.apiCall = async (url, options = {}) => {
//     const token =
//       this.options.getToken && !options.disableToken
//         ? await this.options.getToken()
//         : null;
//
//     options.headers = options.headers || {};
//
//     if (token) {
//       let tempToken = null;
//       if (token[token.length - 1] === "i") {
//         tempToken = token.substring(0, token.length - 1);
//       } else {
//         tempToken = token;
//       }
//       options.headers.Authorization = `${tempToken}`;
//     }
//
//     setHttpHeaders(options, {
//       Platform: getOS() + "-PWA",
//       SellerVersion: pkg.version,
//     });
//
//     const engine = options.engine;
//
//     const {handleResult} = useResponseHandler();
//     return engine(url, options).then(result => {
//       handleResult(result);
//       return result;
//     }).catch((error) => {
//       handleResult(error);
//       if (error.response.status === 401) {
//         storageHelper.clearLocalStorage();
//         window.location && (window.location.pathname = "");
//       }
//     }).catch((error) => {
//       throw error;
//     })
//   };
//
//   httpMethodFactory(this, "get");
//   httpMethodFactory(this, "post");
//   httpMethodFactory(this, "put");
//   httpMethodFactory(this, "delete");
//   httpMethodFactory(this, "head");
// }
//
// ApiInterface.prototype.fromBaseUrl = function(apiPath) {
//   return baseUrlProtocol + path.join(baseUrlDomainAndPath, apiPath);
// };
//
// const ApiPrototype = ApiInterface.prototype;
//
// function createApiInterface(options) {
//   return new ApiInterface(options);
// }
//
// export default createApiInterface;
//
// export { ApiPrototype, createApiInterface };
