/*
Empieza la funcion
*/

var ejemplo = "Web Development Tutorial";

console.log("se ingresa 'Development' para buscar")
var aux = "Development";

//var aux = prompt("ingrese palabra a buscar: ")
// se pueden comenar las 2 lineas de arriba para poder usarlo con buscador manual
console.log(ejemplo.includes(aux));
if(ejemplo.includes(aux)==true){
    console.log("El texto contiene: " + aux);
}
    //console.log("El texto contiene" + aux);

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/