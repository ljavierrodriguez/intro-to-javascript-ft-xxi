/* 

Data Types

String ("", '', ``)
Number (-, +, .)
Boolean (true, false)
Undefined

Object: 
    Array: []
    Literal Object: {}
    Null
    
Function

*/

let nombre1 = "Hugo";
let nombre2 = 'Paco';
let nombre3 = `Luis`;


let name = "John";
let lastname = "Doe";

let fullname = `Hola, ${name} ${lastname}`;
let fullname2 = "Hola, " + name + " " + lastname;

let parrafo = `Lorem ipsum dolor, ${name} sit amet consectetur ${lastname} adipisicing elit. Repellendus quis reiciendis facilis, vitae minima voluptas quas ipsum. Facilis commodi quasi et obcaecati? Repellendus tempore veniam officia nam illo vitae beatae.`;

let name2 = "Jane";

let age = 10;

let result = name2 + age; // Jane10; // String


let temp = -10;
let temp2 = 30;

let ejemplo = 10e10;

let saldo = 10.4;
let saldo2 = -10.5;

let activo = false;

let open = true;

let direccion; // undefined

let valores = [1, 2, [1, 2], true, "", null, { name: 'Luis'}];

let frutas = ["Pera", "Manzana", "Uva"];
let notas = [10, 15, -13, 4, 10, 21];
let sensores = [true, false, false, true, true];

let nombre_estudiante = "Pedro";
let apellido_estudiante = "Perez";

let nombre_estudiant2 = "Anna";
let apellido_estudiante2 = "Smith";


let estudiante1 = {
    nombre: 'Pedro',
    apelido: 'Perez'
};

let estudiante2 = {
    nombre: 'Anna',
    apellido: 'Smith'
}


let estudiantes = [
    {
        nombre: 'Pedro',
        apelido: 'Perez'
    },
    {
        nombre: 'Anna',
        apellido: 'Smith'
    }
];

let estudiante = estudiantes[1];

console.log(estudiante['nombre']);
console.log(estudiante.apellido);

let user = null;

/* let sumar = function(){

} */

function sumar(){

}

console.log(typeof(sumar));