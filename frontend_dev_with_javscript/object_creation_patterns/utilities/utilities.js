(function() {
  var findObjects = function(element, query, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var all_match = true;

      for (var prop in query) {
        if (!(prop in obj) || (obj[prop] !== query[prop])) {
          all_match = false;
        }
      }

      if (all_match) {
        if (multiple) {
          match.push(obj);
        } else {
        match = obj;
        return true;
        }
      }
    });

    return match;
  };

  var _ = function(element) {
    var u = {
      last: function() {
        return element[element.length - 1];
      },

      first: function() {
        return element[0];
      },

      without: function() {
        var result = [];
        var args = Array.prototype.slice.call(arguments);

        element.forEach(function(value) {
          if (args.indexOf(value) === -1) {
            result.push(value);
          }
        });

        return result;
      },

      lastIndexOf: function(value) {
        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === value) {
            return i;
          }
        }

        return -1;
      },

      sample: function(size) {
        var result = [];
        var copy = element.slice();
        var removeRandomElement = function() {
          var index = Math.floor(Math.random() * copy.length);
          var value = copy[index];
          copy.splice(index, 1);
          return value;
        };

        if (!size) {
          return removeRandomElement();
        }

        while(size) {
          result.push(removeRandomElement());
          size--;
        }

        return result;
      },

      findWhere: function(query) {
        return findObjects(element, query, false);
      },

      where: function(query) {
        return findObjects(element, query, true);
      },

      pluck: function(query) {
        return element.map(function(obj) {
          if (obj[query]) {
            return obj[query];
          }
        });
      },

      keys: function() {
        var result = [];
        for (var prop in element) {
          result.push(prop);
        }

        return result;
      },

      values: function() {
        var result = [];
        for (var prop in element) {
          result.push(element[prop]);
        }

        return result;
      },

      pick: function() {
        var args = [].slice.call(arguments);
        var newObj = {};

        args.forEach(function(prop) {
          if (prop in element) {
            newObj[prop] = element[prop];
          }
        });

        return newObj;
      },

      omit: function() {
        var newObj = {};
        var args = [].slice.call(arguments);

        for (var prop in element) {
          if (args.indexOf(prop) === -1) {
            newObj[prop] = element[prop];
          }
        }

        return newObj;
      },

      has: function(property) {
        return ({}).hasOwnProperty.call(element, property);
      },
    };

    (['isElement', 'isArray', 'isObject', 'isFunction', 'isBoolean', 'isString', 'isNumber']).forEach(function(method) {
      u[method] = function() {
        _[method].call(u, element);
      };
    });

    return u;
  };

  _.range = function(start, stop) {
    var result = [];

    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (var i = start; i < stop; i++) {
      result.push(i);
    }

    return result;
  };

  _.extend = function() {
    var args = [].slice.call(arguments);
    var oldObj = args.pop();
    var newObj = args[args.length - 1];

    for (var prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }

    return args.length === 1 ? newObj : _.extend.apply(_, args);
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  _.isObject = function(obj) {
    var type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  };

  _.isFunction = function(obj) {
    return typeof obj === 'function';
  };

  (['Boolean', 'String', 'Number']).forEach(function(method){
    _['is' + method] = function(obj) {
      return toString.call(obj) === '[object ' + method + ']';
    };
  });

  window._ = _;
})();
