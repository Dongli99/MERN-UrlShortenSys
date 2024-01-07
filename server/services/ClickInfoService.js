import geoip from "geoip-lite";
import parser from "ua-parser-js";

class ClickInfoService {
  static getGeolocationInfo(req) {
    // translate ip into geolocation info
    const ip = req.headers["x-real-ip"];
    let city = "",
      region = "",
      country = "";
    if (ip || ip !== "::1") {
      const location = geoip.lookup(ip);
      city = location?.city || "";
      region = location?.region || "";
      country = location?.country || "";
    }
    return { city, region, country };
  }

  static getDeviceInfo(req) {
    // retrieve device info from user agent
    let device = "",
      os = "",
      browser = "";
    console.log(req.headers["user-agent"]);
    const ua = parser(req.headers["user-agent"]);
    device = ua?.device.vendor || "";
    os = ua?.os.name || "";
    browser = ua?.browser.name || "";
    return { device, os, browser };
  }
}

export default ClickInfoService;
