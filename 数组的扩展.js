
//盘点下数组拥有的api
//扩展运算符spread
console.log(...[1,2,3]);//1,2,3
//扩展运算符后面可以是一个表达式,也可以是一个空数组，且空数组不会报错
console.log(...true?[1,2,3]:[])
//扩展运算符的几种优化写法
//1.求一个数组的最大值
Math.max.apply(null,[1,2,3,1]);
Math.max(...[1,2,3,1]);
Math.max(1,2,3,1);
//2，push函数
Array.prototype.push.apply([1,2,3],[4,5,6])
    [1,2,3].push(...[4,5,6]);

//3.数组克隆
let a1 = [1,2]
let a2 = a1 //a2是对a1的引用，修改的时候会一起修改
let a3 = a1.concat(); //此时是a1的克隆
let a4 = [...a1]
let [...a5] = a1; //解构赋值和扩展运算符的结合
//这几种方式的克隆数组，虽然克隆了数组，但是对数组中元素还是引用关系，比如数组中的元素是对象或者数组，修改的时候还会一起修改

//实现了Iterator接口的对象都可以用扩展运算符转为真正的数组
//如原生js获取dom获取到的nodelist是一个NodeList对象，不是数组，这时扩展运算符可以将其转换为真正的数组，原因就在与NodeList实现了Iterator
//实现了Iterator接口的对象除了数组还有map，set，Generator函数


Array.prototype.concat()
//用于合并两个或多个数组，且不会改变不了现有数组，而是返回一个新数组。
Array.prototype.every(function(ele,index,arr){},this)
//callback必填写，该函数接受三个参数（元素，元素索引[可选]，数组[可选]），this选填
//every函数的thisArg，为执行callback时的this值，如果不传该参数，非严格模式下为全局对象，严格模式下为undefined
//如果传入的callback是箭头函数，那this值将被忽略，因为箭头函数在词法上绑定了this的值
//every函数会对每个元素执行callback函数，如果callback函数每次返回都为true，则every函数返回true，否则返回false
//every不会改变原数组
//every遍历的元素范围在第一次调用callback之前就确定好了，在调用every之后添加的元素（比如在回调中为数组增加元素），将不会被遍历,如果数组中存在的元素被更改或者删除了，则他们传入 callback 的值是 every 访问到他们那一刻的值
Array.prototype.some(function(ele,index,arr){},this);
//callback必填写，该函数接受三个参数（元素，元素索引[可选]，数组[可选]），this选填
//some函数的thisArg，为执行callback时的this值，如果不传该参数，非严格模式下为全局对象，严格模式下为undefined
//如果传入的callback是箭头函数，那this值将被忽略，因为箭头函数在词法上绑定了this的值
//some函数会对每个元素执行callback函数，直到找到一个使得callback返回true的真值，如果找到了这个真值，some将立即返回true，否则some将返回false
//some不会改变原数组
//some遍历的元素范围在第一次调用callback之前就确定好了，在调用every之后添加的元素（比如在回调中为数组增加元素），将不会被遍历,如果数组中存在的元素被更改或者删除了，则他们传入 callback 的值是 some 访问到他们那一刻的值
Array.prototype.filter(function(ele,index,arr){},this)
//callback必填写，该函数接受三个参数（元素，元素索引[可选]，数组[可选]），this选填
//filter函数的this参数，为执行callback时的this值，如果不传该参数，非严格模式下为全局对象，严格模式下为undefined
//如果传入的callback是箭头函数，那this值将被忽略，因为箭头函数在词法上绑定了this的值
//filter函数会对每个元素执行callback函数，并利用所有使得callback返回true或等价于true的值，创建一个新数组
//filter不会改变愿数组，他返回由满足条件的元素组成的一个新数组
//filter遍历的元素范围在第一次调用callback之前就确定好了，在调用every之后添加的元素（比如在回调中为数组增加元素），将不会被遍历,如果已经存在的元素被改变或者删除了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值
Array.prototype.forEach(function(ele,index,arr){},this)
//callback必填写，该函数接受三个参数（元素，元素索引[可选]，数组[可选]），this选填
//forEach函数的this参数，为执行callback时的this值，如果不传该参数，非严格模式下为全局对象，严格模式下为undefined
//如果传入的callback是箭头函数，那this值将被忽略，因为箭头函数在词法上绑定了this的值
//forEach会为数组中的每个元素执行callback函数，那些已经删除或者未初始化的项将被跳过
//forEach不会改变原数组，它总是返回undefined，并且不可以链式调用
Array.prototype.map(function(ele,index,arr){},this)
//callback必填写，该函数接受三个参数（元素，元素索引[可选]，数组[可选]），this选填
//map函数的this参数，为执行callback时的this值，如果不传该参数，非严格模式下为全局对象，严格模式下为undefined
//如果传入的callback是箭头函数，那this值将被忽略，因为箭头函数在词法上绑定了this的值
//map会为数组中的每个元素执行callback函数，并利用每次callback执行后的返回值组合形成一个新的数组
//map不会改变原数组
//map方法处理数组时，数组范围在第一次调用callback之前就确定了，愿数组中再新增元素，将不会被callback访问到，若已经存在的元素改变或者删除了，则他们传入callback的值是map方法遍历到它们那一刻的值，被删除的元素不会被访问到
a = [1,2,3,4,5,6]
a.map((item)=>{
  a.shift()
  return item*2
})
(6) [2, 6, 10, empty, empty, empty]
Array.prototype.reduce((acc,cur,idx,src)=>{},initialValue)
//callback必填写，该函数接受四个参数（acc，cur，idx[可选]，src[可选]），initialValue选填
//acc：accumulator,累计起累计回调的返回值，它是上一次调用callback时返回的累积值；
//cur：正在处理的元素
//idx：正在处理当前元素的索引
//src：调用reduce的数组
//第一次遍历时，若传入了initialValue，则acc的值为initialValue，cur的值为数组中的第一个元素，idx值为0，否则acc的值为数组的第一个元素，cur的值为数组的第二个元素，idx值为1
//如果调用reduce的数组为空并且没有提供initialValue，则会抛出TypeError，如果数组只有一个元素并且没有提供initialValue或者提供了initialValue但是数组为空，那么此唯一值将被直接返回并且不会执行callback
//reduce用途
//1.求和
var sum = [0,1,2,3].reduce((acc,cur)=>acc+cur,0)//6
//2.二维数组转换为一维数组
var flatted = [[0,1],[1,2]].reduce((acc,cur) => acc.concat(cur),[])//0,1,1,2
//3.统计数组中重复元素出现个数
var arr = [1,1,1,1,2]
arr.reduce((json,cur)=>{
  if(cur in json){json[cur]++;}
  else {json[cur]=1}
  return json
},{})
//{1:4, 2:1}
//4.数组去重
var a = [1,2,2,2,2,2,3]
a.sort().reduce((pre,cur)=>{
  if (pre.length === 0 || pre[pre.length-1] !== cur){
    pre.push(cur)
  }
  return pre
},[])
//[1,2,3]
Array.prototype.reduceRight()
//功能与reduce一致，不过是从数组末端开始遍历
Array.prototype.find(function(ele,index,arr){},this)
Array.prototype.findIndex(function(ele,index,arr){},this)
//find(回调函数，绑定回调函数的this对象),用于找出第一个符合条件的数组成员，接收一个回调函数，该回调函数接收三个值分别是，当前值（value），当前位置（index），原数组（arr），
//所有成员依次执行该回调函数，查找出第一个返回值为true的成员，然后返回该成员，如果没有符合条件的成员则返回undefined
//find方法不会改变数组。
//find方法处理数组时，数组范围在第一次调用callback之前就确定了，愿数组中再新增元素，将不会被callback访问到，若已经存在的元素改变或者删除了，则他们传入callback的值是map方法遍历到它们那一刻的值，被删除的元素仍旧会被访问到
//findIndex(回调函数，绑定回调函数的this对象)与find方法类似，返回第一个符合条件的数组成员的位置，如果所有成员不符合，则返回-1
function f(item) {
  return item.age > 20
}
let persons = [
  {
    name:'张三',
    age:30
  },
  {
    name:'李四',
    age:20
  }
]
persons.find(f)
//这两个方法都可以发现NaN，弥补了indexOf方法的不足，indexOf无法识别数组的NaN成员
    [NaN].indexOf(NaN);//-1
NaN.findIndex(v=>Object.is(NaN,v));//0
Array.prototype.indexOf(searchElement,fromIndex)
//searchElement：要查找的元素
//fromIndex：开始查找的位置，如果索引值大于或等于数组长度，意味着不会在数组里查找。返回-1。
//indexOf方法用的是strict.equality(===)进行判断searchElement与数组中包含元素直接的关系，不会进行类型转换
//indexOf方法不能查找NaN的在数组中的位置
Array.prototype.lastIndexOf(searchElement,fromIndex)
//lastIndexOf基本用法与indexOf方法一致
//lastIndexOf方法用于返回searchElement在数组中最后的位置
//lastIndexOf方法查找的开始位置为数组尾端或者指定的fromIndex的位置，返回的位置为数组从起始位置到该位置的索引
[1,2,2,2,3].lastIndexOf(2,1)
1
[1,2,2,2,3].lastIndexOf(2,2)
2
[1,2,2,2,3].lastIndexOf(2,4)
3
Array.prototype.join(separator)
//separator数组元素拼接为字符串的分割符，选填
//如果数组中的元素为undefined或null，将会被转换为空字符串
//join方法会返回一个由数组中所有的元素及传入的分割符组成的新字符串，如果数组中只有一个元素，则会返回该元素且不带分割符
[1,2,3].join()//"1,2,3"
[1,2,3].join('')//"123"
[1,2,3].join('-')//'1-2-3'
[1].join('-')//1
Array.prototype.pop()
//pop方法返回数组中的最后一个元素
//pop方法会改变原数组
//如果数组为空数组，则执行pop方法返回的值为undefined
Array.prototype.push(element1, ..., elementN)
//push方法将一个或者多个元素添加到数组的末尾,并返回新的数组
//push方法会改变原数组
Array.prototype.shift()
//shift方法会删除数组第一个元素，并返回该元素的值
//shift方法会改变原数组
//如果数组为空会返回undefined
Array.prototype.unshift(element1, ..., elementN)
//unshift方法将一个或多个元素添加到数组的开头
//unshift会改变原数组
Array.prototype.reverse()
//reverse方法会将数组逆序，并返回逆序之后数组的引用
//reverse会改变原数组
Array.prototype.sort([function compareFunction(a,b){}]);
//sort默认排序顺序是根据字符串的Unicode码点
//compareFunction用来指定按某种顺序排列的函数，如果省略，元素按照转换为的字符串的各个自负的Unicode位点进行排序
//如果指明了compareFunction,数组将会按照调用该函数的返回值排序
//如果compareFunction(a,b)<0 则a会排到b前面
//如果compareFunction(a,b)=0 则a的位置不变
//如果compareFunction(a,b)>0 则b会排到a前面
Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//splice方法通过删除或者替换现有元素或者原地添加新元素来改修改数组，并以数组的形式返回被修改的数组。此方法会改变数组
//start：指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位
//deleteCount选填，表示要移除的元素个数，如果不指定或者指定长度大于array.length-start则从start后面的元素都将被删除
//item1,item2,... 代表要添加进数组的元素，从start开始
//splice函数会改变原数组
//splice会返回一个由被删除的元素组成的一个数组，如果没有删除元素，则返回愿数组
Array.prototype.slice([start[,end]])
//slice返回一个新的数组，数组由原数组索引从start到end的元素组成（包含start但不包含end）
//start起始处的索引，如果该参数为负值，代表从原数组的倒数第几个元素开始提取。如果省略则默认从0开始，如果大于数组长度，则返回空数组
//end提取终止处的索引，如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。如果被省略，则slice会一直提升到原数组末尾，如果end大于数组长度，slice也会一直提取到原数组末尾
//slice方法不会改变原数组
Array.prototype.toString()
//toString方法连接数组并返回一个字符串，并用逗号分隔每个数组元素
//当一个数组被作为文本或者进行字符串进行操作是，会自动调用起toString方法
Array.prototype.toLocaleString([locales[,options]])
//toLocaleString( 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
//locales:带有BCP 47语言标记的字符串或字符串数组。关于locale参数的形式与解释（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl）
//options:一个可配置属性的对象
var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', {timeZone: "UTC"});
console.log(localeString);//"1,a,12/21/1997, 2:12:00 PM",
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥7,￥500,￥8,123,￥12"
Array.isArray(obj)
//isArray用于确定传递的值是否是一个 Array。
Array.isArray([1, 2, 3]);
// true
Array.isArray({foo: 123});
// false
Array.isArray("foobar");
// false
Array.isArray(undefined);
// false

//二.新增api
Array.from
// (待转化的数据结构，对数组中每个元素进行处理的函数类似map，context用于绑定map函数的this)
// 将两类对象转换为真正的数组，如类似数组的对象和可遍历的对象，本质特征是必须有length属性，任何有length属性的对象都可以通过Array.from转换为数组，而此时扩展运算符就无法转换
//ES5类似数组的对象转换为数组的方法为Array.slice.call(x),x为待转换的对象
function argumentsToArray() {
  console.log(Object.prototype.toString.call(Array.prototype.slice.call(arguments)))
  //输出[object Array]
  console.log(Object.prototype.toString.call(Array.from(arguments)))
  //输出[object Array]
  console.log(Object.prototype.toString.call([...arguments]))
  return Array.from(arguments,value=>typeof value)
}

Array.from({a:1,b:2,length:3})
[undefined, undefined, undefined]
Array.from({1:1,2:2,length:3})
[undefined, 1, 2]

Array.of
//方法用于将一组值转换为数组
Array.of(1,2,3)
[1, 2, 3]
Array.of(0)
[0]
function ArrayOf() {
  return [].slice.call(arguments)
}

Array.prototype.copyWithin(target,start=0,end=this.length)
//[].copyWithin()在当前数组内部，将指定位置的成员复制到其他位置（覆盖原有成员），然后返回当前数组么，也就是说该方法会修改当前数组
//target代表从该位置开始替换数据，如果为负值，表示倒数
//start表示从该位置开始读取数据，默认为0，如果为负值表示从末尾开始计算
//end表示到该位置停止读取数据，默认等于数组长度，如果为负值，表示从末尾开始计算
[1,2,3,4,5,6].copyWithin(0,3,5)
[4, 5, 3, 4, 5, 6]
[1,2,3,4,5,6].copyWithin(-3,3,5)
[1, 2, 3, 4, 5, 6]

Array.prototype.fill((value[, start[, end]])
//fill(填充的内容，开始的位置，结束的位置)用于初始化数组
//value：用来填充数组元素的值
//start（可选）：起始索引。默认值为0
//end（可选）：终止索引，默认为this.length
//如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end。
//fill会改变数组本身
[1,2,3].fill(1)
[1,1,1]
new Array(3).fill(2,1,2)
[empty,2,empty]
//注意如果填充的类型为对象或者数组，赋值的是同一个内存地址的对象，而不是深拷贝对象

Array.prototype.keys()
Array.prototype.values()
Array.prototype.entries()
//[].entries(),[].keys(),[].values()用于遍历数组，它都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys是对键名的遍历，values是对键值的遍历，entries是对键值对的遍历。
['a','b'].entries().next().value
(2) [0, "a"]
let data = new Map()
data.set('a','1')
data.set('b','2')
for (let i of data.keys()) {
  console.log(i);
}
//a,b
for (let i of data.values()) {
  console.log(i);
}
//1,2
for (let i of data.entries()) {
  console.log(i);
}
//["a", "1"],["b", "2"]
for (let elem of ['a', 'b'].keys()) {
  console.log(elem);
}
//0,1
for (let elem of ['a', 'b'].entries()) {
  console.log(elem);
}
//[0, "a"][1, "b"]

Array.prototype.includes(value[,fromIndex])
//[].includes返回一个布尔值，表示某个数组是否包含给定的值
//value：需要查找的元素值
//fromIndex，默认为0，如果是负值，则从array.length + fromIndex开始搜索；如果它大于数组长度，比如第二个参数为4，但是数组长度为3，则会返回false
[1,2,3,4,5].includes(1)
true
[1,2,3,4,5].includes(1,2)
false
[1,2,3,4,5].includes(1,10)
false
[1,2,3,4,5].includes(1,-10)
true
Array.prototype.flat()
//8.[].flat(拉平的层数)数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组拉平，变成一维数组，会返回一个新数组，对原数据没有影响，该方法支持传入一个参数，代表拉平的层数
//[].flatMap代表对每个成员执行一个函数，相当于Array.prototype.map方法，然后对返回值执行flat()方法，该方法会返回一个新数组,flatMap只会拉平一层数组,该函数接收一个回调函数作为参数，第一个是值，第二个是位置，第三个是数组本身
[1,[2]].flat()//[1,2]
[1,[2,[3]]].flat(2)//[1,2,3]
[1,2,3].flatMap((x,index,arr)=>[x,x*2])//[1,2,2,4,3,6]
//这两个方法需要注意兼容性问题！！！