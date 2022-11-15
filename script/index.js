function suma(a,b) {
    return (a+b);
}
function resta(a,b) {
    return (a-b);
}
function multiplicacion(a,b) {
    return (a*b);
}
function division(a,b) {
    if (b===0) {
        alert ("Ingrese un valor distinto de cero!");
    }
    else {
        return (a/b); 
    }
}
const mostrarTexto = (operacion, valor) => {
    alert ("La operación es: " + operacion + " y su valor es: " + valor);
}
function parsearValor(texto) {
    return parseFloat(prompt(texto));
}
let numeroA = parsearValor("Ingrese un valor");
let numeroB = parsearValor("Ingrese un segundo valor");

while (isNaN(numeroA) || isNaN(numeroB)) {
    numeroA= parsearValor("Vuleva a ingresar un valor válido");
    numeroB= parsearValor("Ingrese un segundo valor")
}

const operacion = prompt("Qué operación quiere realizar? (+, -, *, /)")

switch (operacion) {
    case "+":
        mostrarTexto("suma", suma(numeroA, numeroB))
        break;
    case "-":
        mostrarTexto("resta", resta(numeroA, numeroB))
        break;
    case "*":
        mostrarTexto("multiplicación", multiplicacion(numeroA, numeroB))
        break;
    case "/":        
        mostrarTexto("división", division(numeroA, numeroB))
        break;
    default: 
    alert ("ingresaste una operación no válida.");
}