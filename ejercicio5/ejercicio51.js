function sum(array){
    let sum=0;
    if(array)
    {
        for (let i = 0; i < array.length; i++) {
        sum+=array[i];
        }
        return sum;
    }else
        return 0;
}

console.log(sum([1,2,3]))
console.log(sum([10,8,12,5]))
console.log(sum([]))
