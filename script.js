//ejercicio 1
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
