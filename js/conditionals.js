/* Conditionals */
/* 

Operadores Comparacion:
-------------------------------------------------------

===  (valor, tipo)
==  (valor)
!== (valor, tipo)
!= (valor)
>= (valor)
<= (valor)
> (valor)
< (valor)

-------------------------------------------------------

Operadores Logicos
-------------------------------------------------------
AND (&&) OR (||) NOT (!)

true && true = true
true && false = false
false && false = false

true || true = true
true || false = true
false || false = false

!true && !true = false
!true && !false = false
!false && !false = true

!true || !true = false
!true || !false = true
!false || !false = true

-------------------------------------------------------

if(condition){
    sentences
}

if (condition) {
    sentences
} else {
    sentences
}

if (condition) {
    sentences
} else if (condition) {
    sentences
} else if (condition) {
    sentences
} else { // optional
    sentences
}



switch (option) {
    case value: sentences
        break;

    default: sentences
        break;
}

*/


if (1 === '1') {
    console.log("1");
}

if (1 == '1') {
    console.log("1");
}


let a = 5;
let b = 6;
let c = 8;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

if (a > b && a > c) {
    console.log("A");
} else if (b > c) {
    console.log("B");
} else {
    console.log("C")
}

let option = 3;

switch (option) {
    case 1:
        console.log("Ha elegido la option 1");
        break;
    case 2:
        console.log("Ha elegido la option 2");
        break;

    default:
        console.log("Ha elegido una opcion invalida");
        break;
}

console.log("Continuando con las tareas");

let opt = 5;

switch (opt) {
    case 1:
    case 2:
    case 3:
        console.log("Has elegido alguna de estas opciones (1, 2, 3)")
        break;

    case 4:
        console.log("Has elegido la opcion 4");

    default:
        console.log("Por favor elige una opcion");
        break;
}

/* Operador ternario */
/* 

result = condition ? true : false;

*/

let result2 = a > b ? "El mayor es A" : "El Mayor es B";
console.log(result2)

let result3 = a > b && a > c ? "El mayor es A" : b > c ? "El mayor es B" : "El mayor es C";