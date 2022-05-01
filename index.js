module.exports = (options = {}) => {
  return (req, res, next) => {
    const ips = [
      "18.237.145.219",
      "34.213.241.18",
      "54.184.142.71",
      "34.219.54.89",
      "52.13.31.12",
      "52.89.157.185",
      "34.208.60.206",
      "3.80.101.141",
      "54.90.242.158",
      "54.172.185.65",
      "3.83.250.144",
      "18.209.180.25",
      "54.167.181.168",
      "54.166.136.197",
      "52.207.207.52",
      "54.252.242.153",
      "3.104.121.59",
      "34.253.198.121",
      "63.33.56.11",
      "34.250.114.219",
      "54.171.251.199"
    ];
    const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
    if(ips.includes(ip)) {
      if (!options.file) {
        res.status(options.status || 404).send(options.text || "<h1>404 Not Found</h1>");
      } else {
        res.status(options.status || 200).sendFile(options.file);
      }
    } else {
      next();
    }
  }
}