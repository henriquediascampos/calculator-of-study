
/**
 * - validar as entradas
 *  não permitir que tenha dois operadores seguido do outro
 *  não pode começar com um operador,
 *  - exceto o de subtração
 */
function enterNumer(element) {
    const entrada = element.innerText;
    const display = document.getElementById('entrada').value;
    const entradaValida = validaEntrada(entrada, display);

    //é um sinal, e se o ultimo caracter tbm
    // condicionais

    if (entradaValida) {
        document.getElementById('entrada').value = display + entrada;
    }
}

function validaEntrada(entrada, display) {
    let entradaValida = true;

    if ((entrada === '+' || entrada === '*' || entrada === '/') && display === '') {
        entradaValida = false;
    }

    //operador de igualdade   a === b
    //operador de diferença   a !== b

    //saber se o display contem algum texto
    //qual é o ultimo caracter do display e se ele é um operador matemático
    // entrada tbm é um operador matemático

    return entradaValida;
}


/**
 * implementar a função "result" para efetuar o calculo
 */