//Le solicitamos al cliente un numero para ingresar .
let number = parseInt(prompt("Ingresa un numero de 1 a 20"))

/* CREAMOS UNA VARIABLE CON UN FUNCION DENTRO QUE HARA LOS CALCULOS*/
const validador = num => {
    //ACA VALIDAREMOS QUE CUMPLA EL RANGO ESTABLECIDO
    if(num >= 1 && num<= 20 ){
        // CON ESTE CICLO MOSTRAREMOS LA MULTIPLICACION
        for (let i = 1; i <= num ; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
          }
        for(let i = 1; i <= num ; i++){
            console.log(`El factorial del ${i} es : ${factorial(i)}`);
        }
    }
    //Le enviaremos al usuario un mensaje cuando no cumpla con los parametros.
    else{
        return console.log("No es un numero valido");
    }
}
// Acá creamos el calculo del factorial.
const factorial = num => {
    if(num <= 1) return 1

    return num * factorial(num - 1)
}


validador(number)