function max(array){
    let mx=0;
    if(array.length>0){
        for (let i = 0; i < array.length; i++) {
            if(mx<array[i]) mx = array[i];
        }
        return mx;
    }else{
        return;
    }
}

console.log(max([1,3,2]))
console.log(max([10,9,8,7,6,5,4]))
console.log(max([]))