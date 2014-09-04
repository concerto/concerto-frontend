var concerto = concerto || {};

concerto.contentFactory = (function () {

  var types = {};

  return {
    /**
     * Initialize a new content element.
     */
    getType: function (typeName) {
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
        types[typeName] = ContentType;
      }
    }
  };
})();