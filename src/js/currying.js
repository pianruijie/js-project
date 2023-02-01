
//什么是柯里化：把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术
function add(x,y) {
  return x+y
}

function curryingAdd(x) {
  return function(y) {
    return x+y
  }
}
add(1,2) // 3
curryingAdd(1)(2)
//好处
//参数复用
//提前确认
//延迟运行
Function.prototype.bind = function() {
  var args = Array.from(arguments)
  var context = args[0];
  var data = args.slice(1)
  var _this = this;
  return function() {
    return _this.apply(context,data)
  }
}
//函数作为参数
function curry(fn) {
  var arg = Array.from(arguments).slice(1)
  return function() {
    var _arg = Array.from(arguments)
    var final = arg.concat(_arg)
    fn.apply(null,final)
  }
}

function currying(fn) {
  var arg = Array.from(arguments).slice(1)
  var adder = function() {
    var _arg = Array.from(arguments)
    arg = arg.concat(_arg)
    return adder
  }
  adder.toString = function() {
    return fn.apply(null,arg)
  }
  return adder
}
