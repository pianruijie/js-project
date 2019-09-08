
//for in会遍历所有可枚举的属性，包括原型对象上的可枚举属性
Object.prototype.a = 1
var obj = {
  b:2,
  c:3
}
for (var key in obj){
  console.log(obj[key])
} // 1 2 3
//为了防止遍历原型对象上的可枚举属性可以通过hasOwnProperty来判断是该属性是位于原型对象上还是属于该对象
Object.prototype.a = 1
var obj = {
  b:2,
  c:3
}
for (var key in obj){
  if(obj.hasOwnProperty(key)){
    console.log(obj[key])
  }
} // 2 3

// for of用来迭代可迭代对象（array，map，set，string，arguments等等）
