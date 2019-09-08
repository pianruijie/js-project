
let eventsEmitter = require('events').EventEmitter
let event = new eventsEmitter()

class EventsEmitter {
  constructor(){
    this._events = Object.create(null)
  }
  on(type,handler){
    (this._events[type] || (this._events[type] = [])).push(handler)
  }
  remove(type,handler){
    this._events[type] = null;
  }
  once(type,handler){
    let fire = false;
    function magic() {
      this.remove(type,magic)
      if (!fire) {
        fire = true;
        handler.apply(this,arguments)
      }
    }
    this.on(type,magic)
  }
  emit(type,...arg){
    if (this._events[type]){
      for (var i = 0; i < this._events[type].length;i++){
        this._events[type][i](...arg);
      }
    }
  }
}