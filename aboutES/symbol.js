
//symbol是一种原始数据类型，是一种类似字符串的数据类型,不能使用new关键字进行初始化定义
var a = Symbol('prj')//括号里的是对这个值的描述，也可以选择不添加 var a = Symbol()这样;
var b = {
  [a]:'111',
  a:'222'
}
console.log(b[a]) //111
console.log(b['a']) //222
console.log(b.a) //222

//Symbol属性的值不会出现在for...in... for...of...循环中，也不会出现在Object.keys() Object.getOwnPropertyNames(),JSON.stringify返回
//但是它也不是似有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名
//还有一个api，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和symbol类型的键名

//Symbol.for()可以做到接受一个字符串作为参数，然后搜索有没有这个参数作为名称的Symbol值，如果有就返回这个Symbol值，如果没有就会创建并返回一个以这个字符串为名称的Symbol值
//Symbol.for()生成的symbol会被登记在全局环境中供搜索
var a = Symbol("foo"), b = Symbol.for('foo');
console.log(a === b); //false
var a = Symbol.for("foo"), b = Symbol.for('foo');
console.log(a === b); //true

// Symbol.keyFor()会返回一个已登记的Symbol类型值的key,也就是由Symbol.for新建生成的symbol值

// Symbol主要用于定义的公共对象的属性或者变量对外暴露使用，为了防止被复写
// 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法,需要时请到查阅文档 http://es6.ruanyifeng.com/#docs/symbol#%E5%86%85%E7%BD%AE%E7%9A%84-Symbol-%E5%80%BC。