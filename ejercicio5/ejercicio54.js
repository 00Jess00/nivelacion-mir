function join(array){
   let arr="";
    for (let i = 0; i < array.length; i++) {
        arr += array[i];
        if(array.length-1 != i) arr+= " ";
    }
    return arr
    
}

console.log(join(["Hola","Mundo"]))
console.log(join(["Make","It","Real"]))
console.log(join([]))
