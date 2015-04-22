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

/**
 * Use iterative binary search to find optimal content font size given 
 * the element's dimensions as constraints.
 */
PolymerExpressions.prototype.optimalFontSize = function(element, content) {
  // Font size and container constraints
  var maxSize = 200;
  var minSize = 4;
  var maxWidth = element.parentNode.offsetWidth;
  var maxHeight = element.parentNode.offsetHeight;

  // Binary search to find optimal font size
  while (maxSize > minSize + 1) {
    // calculate mid point of max and min font sizes
    midSize = Math.floor((maxSize - minSize) / 2) + minSize;
    // set content node font size to mid point
    content.style.fontSize = midSize + "px";

    // check if content node exceeds height constraint
    if (!(content.offsetHeight <= maxHeight && content.offsetWidth <= maxWidth)) {
      // continue search on smaller font sizes
      maxSize = midSize;
    } else {
      // continue search on larger font sizes
      minSize = midSize;
    }
  }

  // Set final font size 
  content.style.fontSize = minSize + "px";
};