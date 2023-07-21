/* Functions */
/* 

function funcName (args...) {
    sentences
}

const funcName = function(){
    sentences
}

*/

//saludo(); // llamada o ejecucion de la funcion

//function saludo(){ // declaracion o definicion de la funcion
//    console.log("Hola");
//}

let nombre = "Genesis";

const saludo = function(){
    let nombre = "Pedro"
    console.log(nombre);
}

saludo();

console.log(nombre);

let num1 = 6;
let num2 = 10;

function sumar(num1, num3, num2 = 10){
    let suma = num1 + num2 + num3;
    console.log(suma); // imprime por consola
    return suma; // retorna el resultado de la suma
}

function restar(a, b){
    return a - b;
}

sumar(10, num2, 10, 10, 10);
sumar(num1, 4);
sumar(num1, num2);

sumar(100);

sumar(100, 10);


function operacion(func, valor1, valor2){
    console.log(func(valor1, valor2))
}

operacion(sumar, 10, 10);
operacion(restar, 100, 30);
operacion(function(){ console.log("definiendo la funcion directamente en el parametro"); return "Funcion ejecutada"}, null, null);
