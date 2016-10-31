1.

```javascript
function whatIsMyContext() {
  return this;
}
```

`this` is unknown, since the function is not invoked.

2.

```javascript
function whatIsMyContext() {
  return this;
}

whatIsMyContext();
```

`this` will refer to the global object, `window` in the case of the browser

3.

```javascript
function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();
```

`this` will again refer to the `window` object. It is implicitly bound

4.

```javascript
var obj = {
  count: 2,
  method: function() {
    return this.count;
  },
};

obj.method();
```

`this` will refer to the object that called the method: `obj`

5.

```javascript
function foo() {
  console.log(this.a);
}

var a = 2;
foo();
```

`2` will be logged. `var a = 2` in this context creates a property on the `window`
object. When foo is called it is in the global context.

6.

```javascript
var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar,
};

obj.foo();
```

`2` will be logged. the `obj.foo()` method calls the `bar` function.
`this` will refer to `obj`, which has `a` property set to 2

7.

```javascript
foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  },
};

foo.bar();
var qux = foo.bar;
qux();
```

`foo.bar()` will log `foo` object

`qux()` will give an error, since it's context is window, and there is no `baz`
method defined on the window object
