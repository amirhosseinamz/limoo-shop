import { OS } from "~/config/constants";

export function getOS() {
  const { userAgent } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = OS.mac;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = OS.ios;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OS.window;
  } else if (/Android/.test(userAgent)) {
    os = OS.android;
  } else if (!os && /Linux/.test(platform)) {
    os = OS.linux;
  }

  return os;
}

export default getOS;
