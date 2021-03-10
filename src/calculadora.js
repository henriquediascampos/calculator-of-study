
/**
 * - validar as entradas
 *  não permitir que tenha dois operadores seguido do outro
 *  não pode começar com um operador, exceto o de subtração
 */
function enterNumer(element) {
    const entrada = element.innerText;
    const display = document.getElementById('entrada').value;
    const entradaValida = validaEntrada(entrada, display)

    //é um sinal, e se o ultimo caracter tbm

    // condicionais
    if (entradaValida) {
        document.getElementById('entrada').value = display + entrada;    
        
    }
}

    function validaEntrada(valorEntrada, valorDisplay) {
        let entradaValida = true
        
        if ((valorEntrada === '+' || valorEntrada === '*' || valorEntrada === "/") && valorDisplay === '') {
            entradaValida = false
        }

        return entradaValida
    }

/**
 * implementar a função "result" para efetuar o calculo
 */