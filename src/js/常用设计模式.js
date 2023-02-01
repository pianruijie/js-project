
//1.单例模式：保证一个类只有一个实例，并提供一个访问它的全局访问点
// function Manager(name){
//   this.name = name
// }
// Manager.prototype.getName = function() {
//   console.log(this.name)
// }
// var singleExm = (function() {
//   var manager = null
//   return function(name) {
//     if (!manager){
//       manager =  new Manager(name)
//       return manager
//     }else {
//       return manager
//     }
//   }
// })()
//
// var a = new singleExm('a');
// console.log(a.getName())//a
// var b = new singleExm('b');
// console.log(b.getName())//a
//2.策略模式：由两部分组成，策略类和使用类，策略类封装具体的算法，使用类将数据委托给策略类，类似与项目中封装的test校验参数的方法，请求前将参数委托给test方法进行校验
//3.发布订阅模式和观察者模式
//观察者模式中观察者和目标直接进行交互
class Observer {
  constructor(){
  }
  update(val){

  }
}
class ObserverList {
  constructor(){
    this.ObserverList = []
  }
  add(observer){
    return this.ObserverList.push(observer)
  }
  remove(observer){
    return this.ObserverList.filter()
  }
  count(){
    return this.ObserverList.length
  }
  get(index){
    return this.ObserverList[index]
  }
}
class Subject {
  constructor(){
    this.observers = new ObserverList()
  }
  addObserver(obs){
    this.observers.add(obs)
  }
  remove(obs){
    this.observers.remove(obs)
  }
  notify(){
    for (let index = 0; index<this.observers.count(); index++){
      this.observers.get(index).update(...args)
    }
  }
}
let obj = {
  a:1,
  b:2
}
//数据劫持用到了该模型 每次set的时候都会触发notify，达到通知的效果
for (let key in obj) {
  let sub = new Subject()
  let data = obj[key]
  if (obj.hasOwnProperty(key)) {
    Object.defineProperty(obj,key,{
      writable:true,
      get:function() {
        let ob = new Observer()
        sub.addObserver(ob);
        return data
      },
      set:function(val) {
        sub.notify()
        obj[key] = val
        data = val
      }
    })
  }
}
//发布订阅模式中统一由调度中心进行处理，订阅者和发布者互不干扰
