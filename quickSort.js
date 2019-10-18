
function quickSort(arr) {
  let sort = (arr,left=0,right=arr.length-1)=>{
    if(right<=left){
      return;
    }
    let basVal = arr[right];
    let i = left;
    let j = right;
    while(i<j){
      while(i<j && arr[i] <= basVal){
        i++;
      }
      //将大的值放到后面
      arr[j] = arr[i];
      while(i<j && arr[j] >= basVal){
        j--;
      }
      //把小的值放到前面
      arr[i] = arr[j];
    }
    //i遇到j时证明一趟完成，此时i=j，需要将basVal放到这个位置，此时这个元素前面的都小于该元素，后面的都大于该元素
    arr[i] = basVal;
    sort(arr,left,i-1);
    sort(arr,i+1,right);
  }
  //定义新的数组 分配新的内存
  let newArr = arr.concat();
  sort(newArr);
  return newArr;
}
let a= [1,2,3,2,5,1]
console.log(quickSort(a))