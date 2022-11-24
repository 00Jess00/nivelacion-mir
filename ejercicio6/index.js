let pedro={
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"],
    estatura: "1.8",
    saluda:()=>{
        console.log("Hola, me llamo "+pedro.nombre)
    }
};

console.log(pedro.edad)
delete pedro.activo
console.log(pedro.activo)
console.log("/////")
for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave," : ",pedro[llave])
    }
}

console.log(pedro.saluda())