function removeFinalSlash(url) {
  return typeof url === "string" && url[url.length - 1] === "/"
    ? url.substring(0, url.length - 1)
    : url;
}

function parseUrl(url) {
  const parts = url.match(/(https?:\/\/)([^/]*)(\/(.*)\/?)?/);
  if (parts) {
    return {
      raw: removeFinalSlash(url),
      protocol: parts[1],
      origin: parts[2],
      path: removeFinalSlash(parts[4]),
    };
  }
  return null;
}

function parseJwt(token) {
  try {
    // Get Token Header
    const base64HeaderUrl = token.split(".")[0];
    const base64Header = base64HeaderUrl?.replace("-", "+")?.replace("_", "/");
    const headerData = JSON.parse(window.atob(base64Header));

    // Get Token payload and date's
    const base64Url = token.split(".")[1];
    const base64 = base64Url?.replace("-", "+")?.replace("_", "/");
    const dataJWT = JSON.parse(window.atob(base64));
    dataJWT.header = headerData;

    return dataJWT;
  } catch (err) {
    return false;
  }
}

export default parseUrl;
export { parseUrl, removeFinalSlash, parseJwt };
