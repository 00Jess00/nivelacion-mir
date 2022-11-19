function sum(num){
    if(num>0){
        var result=num;
        for(i=1; i<num;i++){
            result+=i;
        }
    }
    return result;
}

console.log(sum(4));
console.log(sum(10));
console.log(sum(15));