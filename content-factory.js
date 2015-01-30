var concerto = concerto || {};

concerto.contentFactory = (function () {

  var types = {};

  /**
   *  Normalize the type names for consistent registration / lookup.
   *  We use a lower case non-punctuated string because some content types are
   *  CamelCase on the server but Regularcase in JavaScript (like HtmlText).
   */
  var normalizeTypeName = function(typeName) {
    var basicName =  typeName.replace(/\W/g, '');
    return basicName.toLowerCase();
  }

  return {
    /**
     * Initialize a new content element.
     */
    getType: function (typeName) {
      typeName = normalizeTypeName(typeName);
      return (types[typeName] ? new types[typeName]() : undefined);
    },

    /**
     * Register a content element class with a type.
     */
    registerType: function (typeName, ContentType) {
      if (!ContentType) {
        // Do not register content types which do not have a public constructor.
        return;
      }
      var proto = ContentType.prototype;
      if ('contentId' in proto && 'title' in proto) {
        typeName = normalizeTypeName(typeName);
        types[typeName] = ContentType;
      }
    }
  };
})();