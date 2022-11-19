function calcularColor(num){
    var color;
    if(num==1){
        color="black"
    }else{
        if(num==2){
            color="white"
        }else if(num==3){   
            color="blue"
        }else
            color="green"
    }

    return "El color es: " + color;
}


console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));