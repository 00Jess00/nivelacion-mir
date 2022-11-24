let pedro={
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
};
//Imprimir Edad
console.log(pedro.edad)
//Add Estatura con valor 1.8
pedro.estatura= "1.8"
//Eliminar Activo
delete pedro.activo
//Imprimir
for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave," : ",pedro[llave])
    }
}
//Add Saluda
pedro.saluda=()=>{
    console.log("Hola, me llamo "+pedro.nombre)
}
//Saludar
console.log(pedro.saluda())