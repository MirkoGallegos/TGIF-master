/*
Empieza la funcion
*/

String.prototype.darVuelta = function() { //creamos un nuevo 'metodo' para las variables 'String'

    var x = this.length; //agarro distancia del valor tomado por el metodo creado

    var cadena = "";//iniciamos el auxiliar en donde se colocará el resultado de dicho metodo

    while (x>=0){ //while encargado de dar vuelta desde el ultimo hasta el primero

        cadena = cadena + this.charAt(x); //A la cadena le "sumamos" el bit que corresponde en la funcion 'charAt'
        x--;
    }
    return cadena;//retornamos la cadena re ordenada 

}

var numerito = "23443";
console.log("el string: " + numerito + ", dado vuelta es..." + numerito.darVuelta());

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

/*
Empieza la funcion
*/
String.prototype.sort = function() { //creamos un nuevo 'metodo' para las variables 'String'

    var x = this.length; //agarro distancia del valor tomado por el metodo creado

    var cadena = "";//iniciamos el auxiliar en donde se colocará el resultado de dicho metodo

    arrayAux = []; //iniciamos array auxiliar 

    for(var i=0;i<=x;i++){ //for para recorrer todo el String que se ingreso

    arrayAux[i] = this.charAt(i); //empezamos a tomar dato por dato al array 
    
    }

    arrayAux.sort(); //se ordena el array

    for(var e = 0; e<= arrayAux.length-1;e++){
        //empezamos a sumar cada letra a la cadena
        cadena = cadena + arrayAux[e];
    }

    return cadena;//retornamos la cadena re ordenada 

}

var stringFurioso = "salaminescos.oasfasfs";
console.log("el string: " + stringFurioso + ", ordenado es..." + stringFurioso.sort());
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

/*
Empieza la funcion
*/
String.prototype.inicioMayus = function() { //creamos un nuevo 'metodo' para las variables 'String'

    var x = this.length; //agarro distancia del valor tomado por el metodo creado

    var cadena = "";//iniciamos el auxiliar en donde se colocará el resultado de dicho metodo

    arrayAux = [];

    for(var i=0;i<=x;i++){ //while encargado de dar vuelta desde el ultimo hasta el primero

    arrayAux[i] = this.charAt(i); //Al array le "sumamos" el bit que corresponde en la funcion 'charAt'
    
    }

    var aux = "" //sacamos un auxiliar para los caracteres que vamos a pasar a mayuscula

    for(var e = 0; e<= arrayAux.length-1;e++){
        
        aux = arrayAux[e];
        //cambia el String a mayuscula cuando arranca 
        if(e==0){
            aux = arrayAux[e];
            arrayAux[e] = aux.toUpperCase();
        }
        
        //cambia el siguiente string despues de un espacio
        if(arrayAux[e]==" "){
            aux = arrayAux[e+1];
            arrayAux[e+1] = aux.toUpperCase();
        }
        

        cadena = cadena + arrayAux[e];
        
    }

    return cadena;//retornamos la cadena re ordenada 

}

var ejemplo = "prince of persia";
console.log("el string: " + ejemplo + ", se ve mas lindo asi ..." + ejemplo.inicioMayus());

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

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