

// set是一种新的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值
//初始化方法1
var a = new Set();
[1,1,1,1,1,1,2].forEach(item => a.add(item))
for (let i of a){
  console.log(i)
}
//控制台：1 2
//初始化方法2
var a = new Set([1,2,2,3,4])
console.log(a)
//控制台：Set(4) {1, 2, 3, 4}

//属性和方法
a.size //返回Set实例的成员总数
a.add(3) //添加
a.delete(2) //删除某个值返回一个布尔值，表示删除是否成功
a.has(3)//返回一个布尔值，表示该值是否为Set的成员
a.clear()// 清楚所有成员，没有返回值

//遍历操作
Set.prototype.keys()//返回键名的遍历器
Set.prototype.values()//返回键值的遍历器
Set.prototype.entries()//返回键值对的遍历器
Set.prototype.forEach(()=>{})//使用回调函数遍历每个成员

let ws = new WeakSet()
//WeakSet结构与set类似，也是不重复的值的集合，但是和set有两个区别。WeakSet中对象的都是弱引用（如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在WeakSet）
//作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
WeakSet.prototype.add(value)//向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value)//清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value)//返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
//WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。




//javaScript对象，本质上是键值对的集合，但是只能接受字符串当作键，为了解决这个问题，ES6提供了Map数据结构，Objec提供了"字符串-值"的对应，mao提供了"值-值"的对应
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')//这里的o的值实际是对象的内存地址
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
//初始化map
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
//上面实际执行的是
const items = [
  ['name', '张三'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(
    ([key, value]) => map.set(key, value)
);
//不只是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map。
//如果对同一个键多次赋值，后面的值将覆盖前面的值。
//map的键实际上是根内存地址绑定的，只要内存地址不一样，就视为两个键
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];
map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222
//map的size和操作方法
Map.size//返回Map结构的成员总数
Map.prototype.set(key, value)//set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
Map.prototype.get(key)//get方法读取key对应的键值，如果找不到key，返回undefined。
Map.prototype.has(key)//has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
Map.prototype.delete(key)//delete方法删除某个键，返回true。如果删除失败，返回false。
Map.prototype.clear()//clear方法清除所有成员，没有返回值。

//map遍历方法：特别注意的是，Map 的遍历顺序就是插入顺序
Map.prototype.keys()//返回键名的遍历器。
Map.prototype.values()//返回键值的遍历器。
Map.prototype.entries()//返回所有成员的遍历器。
Map.prototype.forEach()//遍历 Map 的所有成员。

//WeakMap：WeakMap和Map相比一是没有遍历操作而是无法清空
//WeakMap只有四个方法可用：get()、set()、has()、delete()。
//使用场景类似WeakSet都是利用弱引用，避免内存泄露