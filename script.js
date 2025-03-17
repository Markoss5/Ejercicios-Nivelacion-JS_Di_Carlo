/*//ejercicio 1
function saludo(){
    let nombre= document.getElementById("nombre")
    console.log(nombre.value);

    
}

//Ejercicio 2
function operadorMatematico(){
let num1 = document.getElementById("numero1").value;
let num2 = document.getElementById("numero2").value;
let sumaTotal = parseInt(num1) + parseInt(num2);
let division = num1 / num2;
let resta = num1-num2;
let multiplicacion = num1 * num2;
 console.log(sumaTotal);
 console.log(division);
 console.log(resta);
 console.log(multiplicacion);
}

//Ejercicio 3

function ComprobarNumero(){
    let num = document.getElementById("numero").value;
    if (num % 2 == 0){
        console.log("es par");
    }
    else{
        console.log("es impar");
    }
}

//Ejercicio 4
function ContarCaracteres(){
    let PalabraUsuario = document.getElementById("PalabraUsuario").value;
        console.log("El largo de la palabra es de " + PalabraUsuario.length + " caracteres ");
}

//Ejercicio 5

function RepetirPalabra(){
    let palabra = document.getElementById("Palabra").value;
    let numeroRepeticion = document.getElementById("numero").value
    numeroRepeticion = parseInt(numeroRepeticion);
    for (let i = 0; i < numeroRepeticion; i++) {
        console.log(palabra);
    }
}

//Ejercicio 6

function TablaMultiplicacion(){
        
let numm = document.getElementById("numm").value;
const limite = 11;
numm = parseInt(numm);
    for (let i = 0 ; i < limite; i++) {
        console.log(numm +" x " + i + " = " + numm*i);
    }    
}

//Ejercicio 7 
function adivinarNumero(){
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    numeroAleatorio = parseInt(numeroAleatorio);
    let adivinanza = parseInt(document.getElementById("adivinanza").value);

    if (adivinanza == numeroAleatorio){
        console.log("Adivinaste el numero");
    } 
     else if(adivinanza > numeroAleatorio )
    {
        console.log("El numero Aleatorio es menor al que usted ingreso, intente de nuevo");
    }
    else if (adivinanza < numeroAleatorio)
    {
        console.log("El numero aleatorio es mayor al que usted ingreso, intente de nuevo");
    }

    console.log(numeroAleatorio)
    
}

//Ejercicio 8

function contarVocales(){
    let palabra = document.getElementById("palabra").value;
    palabra = palabra.toLowerCase();
    let contadorVocales = 0;
    for (let i = 0; i < palabra.length; i++) {
        // Verificar si el carácter es una vocal
        if ('aeiou'.includes(palabra[i])) {
            contadorVocales++;
        }
    }

    contadorVocales = parseInt (contadorVocales);
    console.log("La palabra " + palabra + " tiene " + contadorVocales + " Vocales")
}
*/
//Ejercicio 9

function InvertirCadenaTexto(){
    let palabraa = document.getElementById("palabraa").value;
    console.log(palabraa)
    let palabraInvertida = palabraa.split("").reverse().join("");
    console.log (palabraInvertida);
}

//Ejercicio 10
function VerificarPalindromo(){
    let palabra = document.getElementById("palabra").value;
    let palabraInvertida = palabra.split("").reverse().join("");
    if(palabra==palabraInvertida){
        console.log("la palabra " + palabra + " es igual a la invertida");
    }else
    {
        console.log ("la palabra " + palabra + " no es igual a la invertida");
    }
}