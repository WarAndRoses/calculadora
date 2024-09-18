let resultado = document.getElementById("pantalla");
let actualOperation = "";
let hopeOperation = "";

function addNum(numero){
    actualOperation += numero;
    resultado.value = actualOperation;
}

function operation (op) {
    if (actualOperation === "") return;
    if (hopeOperation !== "") {
        calcule();
    }
    hopeOperation = actualOperation + ' ' + op;
    actualOperation = "";
}

function calcule() {
    let calculo;
    const partes = hopeOperation.split(" ");
    const num1 = parseFloat(partes[0]);
    const num2 = parseFloat(actualOperation);
    const operador = partes[1];


    if (isNaN(num1) || isNaN(num2))  return; 

        switch(operador){
            case '+':
                calculo = num1 + num2;
                break;

            case '-':
                calculo = num1 - num2;
                break;
            case '/':
                calculo = num1 / num2;
                break;
            case '*':
                calculo = num1 * num2;
                break;            
        }

       resultado.value = calculo;
       actualOperation = "";
       hopeOperation = "";
    
}

function limpiar() {
    actualOperation = "";
    hopeOperation = "";
    resultado.value = "";
}
