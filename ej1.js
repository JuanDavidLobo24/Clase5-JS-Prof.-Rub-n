console.log("Buenas")

//Ej 1

let edad = 15;
if (edad >= 18) 
    console.log("Es mayor de edad");
    else
    {console.log ("Es menor de edad)")}

//Ej 2

let nota = 6;
if (nota >= 6) 
    {
    console.log("Aprobado");} 
    else 
        {console.log("Desaprobado");
}

//Ej 3

let usuario = "admin";
let password = "1234";
if (usuario === "admin") {
    if (password === "1235") {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("Acceso denegado");
}

//Ej 4

let numero = 8;
let resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log(resultado);

//Ej 5

let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
}

// Ej 6

let edad1 = 19;
let esMayor = edad1 >= 18;
console.log(esMayor);
