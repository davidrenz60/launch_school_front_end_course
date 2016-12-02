function newPerson(name) {
  var obj = {
    name: name,
  };

  return Object.defineProperties(obj, { // returns the object passed as first argument
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    },
 });
}

var me = newPerson('Shane Riley');
me.log();     // Shane Riley
me.log = function() { console.log("Amanda Rose"); };
me.log();     // Shane Riley
