1.

```javascript
var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  },
};

myObject.myChildObject.myMethod();
```

`this` will refer to `myChildObject`, so `this.count` will be undefined

2.

In the previous example, how would we change the context, or the value of this, to be the parent myObject?

`myObject.myChildObject.myMethod.call(myObject);`

add `.bind(myObject)` to the end of the function.


3.

```javascript
var person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName: function() {
    console.log(this.firstName + ' ' + this.lastName + ' is the Amazing Spiderman!');
  },
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
```

`Peter Parker is the Amazing Spiderman!`
`.bind(person)` will return a function bound to the `person` object.
`whoIsSpiderman` variable is set to that bound function and can be called with
the expected results.

4.

```javascript
var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
}

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = {a: 3};
obj.func.call(obj2);
```

`2`
`1` note, when no `thisArg` is supplied, `this` becomes the window here
`1`
`2`
`3`

5.

```javascript
var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();

foo.bar();
Foo();

var obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
```

`2`. `foo` is set to call the `Foo` constructor, which calls `this.bar()`
`2`. `foo.bar()` logs `foo.a` which was set previously
`2`. `Foo()` changed the global `a` property on window. The constructor calls `this.bar` which logs `a`
`2`. `Foo` is called with the `obj` context, setting `obj.a = 2`. `obj.bar()` is then called'
`2`. Since `obj.a` is set to `2`, `obj.bar()` will log 2


6.

```javascript
var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shipping + this.tax - specialDiscount();
  },
};

console.log(computer.total())
```
will log `NaN` since tax is a local variable and not a property.

In order to fix it to apply the proper discount, one of the following can be done:
change `this.tax` to just be `tax`
Add `var self = this` below the tax variable and change `this.price` in the conditional to reference `self`
Or You could also change the `specialDiscount()` function call to `specialDiscount.call(this)`
Or, set a var named `specialDiscount` to equal the function with `bind(this)`

7.

```javascript
var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.circumference = RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);
```
both will log `NaN` when `rect1.area` is called, it will be called in the RECTANGLE context,
which does not have width or height properties. undefined + undefined will be NaN

How do you fix this problem?

add `.call(this)` to the end of  `RECTANGLE.area()`  `RECTANGLE.circumference()` within the
Rectangle constructor
