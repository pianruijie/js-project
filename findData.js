
function realType(data){
  return Object.prototype.toString.call(data).slice(8,-1);
}
function findData(obj,str){
  if(typeof obj !== "object"){
    return undefined;
  }
  let arr = str.split('.').reverse();
  return loop(obj,arr);
}
function loop(obj,arr) {
  let key = arr.pop();
  if(arr.length === 0){
    return obj[key];
  }else{
    if(realType(obj[key]) === "Object" || realType(obj[key]) === "Array"){
      return loop(obj[key],arr);
    }else {
      return undefined;
    }
  }
}
console.log(findData({a:{b:{d:{e:11},e:12}}},"a.b.e"));