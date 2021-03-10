
/**
 * - validar as entradas
 *  não permitir que tenha dois operadores seguido do outro
 *  não pode começar com um operador, exceto o de subtração
 */

 function enterNumer(element) {
    const valorEntrada = element.innerText;
    const valorDisplay = document.getElementById('entrada').value;
    const entradaValida = validaEntrada(valorEntrada, valorDisplay) //Antes de sobrescrever o display, precisa fazer validação

    //é um sinal, e se o ultimo caracter tbm
    // condicionais
    if(entradaValida){
        document.getElementById('entrada').value = valorDisplay + valorEntrada;
    }
}

function validaEntrada(entrada, display) { //os parâmetros não precisam ter o mesmo nome da função anterior
    let entradaValida = true;

    if((entrada === '+' || entrada === '*' || entrada === '/') && display === ''){ //verifica se a primeira entrada é um operador
        entradaValida = false;
    }

    //operador de igualdade   a === b
    //operador de diferença   a !== b

    //saber se o display contém algum texto
    //qual é o último caracter do display e se ele é um operador matemático
    // entrada também é um operador matemático
    return entradaValida;

}    

/**
 * implementar a função "result" para efetuar o calculo
 */