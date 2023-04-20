const memCache = require('memory-cache');

const cache = (duration) => {
  return (req, res, next) => {
    console.log('checking cache')
    let key = '__express__' + req.originalUrl || req.url
    console.log('🔑',key)
    let cachedBody = memCache.get(key)
    if (cachedBody) {
      console.log('cache found')
      res.send(cachedBody)
      return
    } else {
      console.log('cache not found')
      res.sendResponse = res.send; //temp store this method
      res.send = (body) => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  }
}

module.exports = cache;