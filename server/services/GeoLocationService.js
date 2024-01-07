import geoip from "geoip-lite";

class GeoLocationService {
  static getGeolocationInfo(ip) {
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
}

export default GeoLocationService;
