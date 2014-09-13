/**
 * Prepend a base path to a URL as needed.
 *
 * If a base is supplied and the URL is not absolute, prepend the base to
 * return an absolute URL.
 */
PolymerExpressions.prototype.resolveURL = function(url, base) {
  var r = new RegExp('^(?:[a-z]+:)?//', 'i');
  if (!url || !base || r.test(url)) {
    return url;
  }
  return base + url;
};