function maxIndex(array){
    let mx=0
    if(array.length>0){
        let mx=array[0], id=0;
        for (let i = 0; i < array.length; i++) {
            if(mx<array[i]){
                mx = array[i];
                id=i;
            }
        }
        return id;
    }else
        return -1;
}
console.log(maxIndex([1,3,2]))
console.log(maxIndex([10,9,8,7,6,5,4]))
console.log(maxIndex([]));