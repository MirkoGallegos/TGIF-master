
var lista =[];
console.log("ingresando al listado a mirko");
lista.push("mirko");

console.log("ingresando al listado a gaston");
lista.push("gaston");

console.log("ingresando al listado a edu");
lista.push("edu");

console.log("ingresando al listado a juan");
lista.push("juan");

console.log("ingresando al listado a pancracio");
lista.push("pancracio");

lista.sort();
console.log("el primero de la lista es: " + lista[0]);
console.log("El ultimo de la lista es: " + lista[4]);

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

for(var i = 0;i<=lista.length;i++){
    if(i==0){
        console.log("El listado despues de ordenarlo quedo...")
    }
    console.log(lista[i]);
}

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

var edades = [19,54,43,58,18,81]; //Array usado para varios ejemplos

var count = 0;
while(count<=edades.length){
    if(count==0){
        console.log("iniciando 'while' para edades pares...")
    }
    if(edades[count]%2==0){
        console.log("la edad del sujeto " + count + " es par, tiene " + edades[count] + " anios.");
    }
    count++;
}

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

for(var i = 0;i<=edades.length;i++){
    if(i==0){
       console.log("iniciando 'for' para edades pares...")
       }
    if(edades[i]%2==0){
        console.log("la edad del sujeto " + i + " es par, tiene " + edades[i] + " anios.");
    }
}

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

function menor (x){
    var menorNum = 0;
    for(var i=0;i<=x.length;i++){
        if(i==0){
            menorNum=x[i];
        }else{
            if(menorNum>x[i]){
                menorNum=x[i];
            }
        }
    }
    console.log("el numero menor del array es:" + menorNum);
}
menor(edades);

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

function mayor (x){
    var mayorNum = 0;
    for(var i=0;i<=x.length;i++){
        if(i==0){
            mayorNum=x[i];
        }else{
            if(mayorNum<x[i]){
                mayorNum=x[i];
            }
        }
    }
    console.log("el numero mayor del array es:" + mayorNum);
}
mayor(edades);

console.log("----------------------------");

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
function indexArray (x){
    
    var index = prompt("ingrese numero a utilizar como index.(aviso que el array solo tienen hasta posicion 5)");
    
    /*1er validador de datos para evitar caracteres en el index*/
    while(isNaN(index)==true){
    
        if(isNaN(index)){
        index = prompt("ingresa un numero, ANIMAL!");
        }   
    }   
    /*2do validador de datos para evitar poner un index mas grande que un array, y eviar que ponga carateres...otra vez!*/
    while(index>=x.length){
        
        if(index>=x.length){
            index = prompt("Advertencia: el index supera el tamanio del array por favor vuelva a ingresar un numero menor");
            
        /*validador de caracteres interno*/
            while(isNaN(index)==true){
    
                if(isNaN(index)){
                index = prompt("ingresa un NUMERO menor, ANIMAL!");
                }   
            }
        }
    }
    console.log("El numero dentro del index: " + index + " es: " + x[index]);
}

/*llamdo de la funcion/metodo y se le pone el array parametros utilizado anteriormente 
    Recordatorio: var edades = [19,54,43,58,70,81];
*/

indexArray(edades);

console.log("----------------------------");
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

 /*empieza la funcion*/
 function duplicados(x){
    var aux = "vacio";
    var arrayAux=[];
    var esDup = 0;
    var auxDup = 0;
     // primer recorrido al array 
    for(var i = 0; i<=x.length;i++){
        //condicional para arrancar/sobreescribir el aux, y resetear el booleano esDup
        if(aux == "vacio" || aux != x[i]){
            aux = x[i];
            esDup = 0;
            console.log(aux);
            }
            //recorido para comparar el aux y en caso de que así sea esDup pasar a true
            for(var e = 0;e <= x.length;e++){
                //condicional para no chocar en posiciones entre 'i' y 'e'
                if(e!=i){
                    if(aux==x[e]){
                    esDup = 1;
                    }
                }
            }

            //condicional para saber sí esDup cambio de valor al finalizar la comparacion
            if(esDup==1){
                console.log("hay duplicado: " + aux);
                if(arrayAux.length==0){
                    console.log("se le agrega primer dato al array");
                    arrayAux.push(aux);
                    console.log("primer numero duplicado: " + aux);
                    esDup=0;
                }else{
                        //recorido de validacion de los valores en array aux
                        for(var u = 0; u <= arrayAux.length;u++){
                            //condicional para ver si el dato encontrado ya se encuentra en el array aux
                            if(aux == arrayAux[u]){
                            auxDup = 1;
                            }
                            //condicinal al final del for para ver que hacer el dato que tiene aux
                            if(u==arrayAux.length-1){
                                if(auxDup==1){
                                esDup=0;
                                auxDup=0;
                                }else{
                                    arrayAux.push(aux);
                                    
                                }
                            }
                        }
                    }        
            }
        }
     
    console.log("los numeros duplicados son: " + arrayAux);
    console.log("los mismos se repiten en las siguientes posiciones...");
     
     //for anidado para mostrar la ubicacion y que datos se repiten
     
    for(var o = 0; o <= arrayAux.length-1;o++){
        var auxO = arrayAux[o];
        
        for(var a = 0; a <= x.length; a++){
            if(auxO == x[a]){
                console.log("El numero: " + auxO + " existe en los espacios: " + a)
            }    
        }
    }
}

/*se llama al metodo y se le agrega el array ejemplo*/

var ejemplo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,6,100];
duplicados(ejemplo);

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

/*
Empieza la funcion
*/

var arrayStr = [];
console.log("ingresando elemento 'red'");
arrayStr.push("Red");

console.log("ingresando elemento 'Green'");
arrayStr.push("Green");

console.log("ingresando elemento 'White'");
arrayStr.push("White");

console.log("ingresando elemento 'Black'");
arrayStr.push("Black");

for(var i =0; i<=arrayStr.length-1;i++){
    console.log(arrayStr[i]);
}

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/