
//this时机是在函数调用时发生的绑定，它指向什么完全取决于函数在哪里调用
//绑定规则
//1.默认绑定：
function foo() {
  console.log(this.a);
}
var a = 2;
foo();//2
//2.隐式绑定：调用位置是否有上下文对象，或者说是否被某个对象拥有或包含。
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo(); // 2
//要注意的一点是，对象属性引用链中只有最顶层会影响调用位置
function foo() {
  console.log( this.a );
}
var obj2 = {
  a: 42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo(); // 42
//2.1.隐式丢失:不仅仅存在显式的赋值，如将函数当作参数传递时么，实际也是隐式的赋值，导致隐式丢失
function foo(){
  console.log(this.a)
}
var obj3 = {
  a:3,
  foo:foo,
}
var bar = obj3.foo;
var a = 4;
bar();//4
//函数作为参数

function foo() {
  console.log(this.a);
}
var obj4 = {
  a:3,
  foo:foo
}
function _foo(fn) {
  fn()
}
var a = 5;
_foo(obj4.foo);//5

//3.显示绑定：通过call，apply显式的绑定函数的this,接受的第一个参数是一个对象，它们会把对象绑定到this，在函数调用时指定这个this，因为可以直接指定this，所以称为显式绑定
function foo() {
  console.log( this.a );
}
var obj = {a:2};
foo.call( obj ); // 2

//硬绑定bind，实际内部也是通过apply实现，区别是不会立即执行，会返回一个新的函数，可以在别的时机调用执行

//4 new绑定：执行new操作时候的过程
//4.1 创建或者构造一个全新的对象
//4.2 这个新对象会被执行原型连接，该对象的__proto__会指向函数的prototype
//4.3 这个对象会绑定到函数调用的this
//4.4 如果函数没有返回其它对象，那么new表达式中的函数调用会自动返回这个新对象

