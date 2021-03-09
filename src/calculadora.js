
/**
 * - validar as entradas
 *  não permitir que tenha dois operadores seguido do outro
 *  não pode começar com um operador, exceto o de subtração
 */
function enterNumer(element) {
    const valorNovo = element.innerText;
    const valorAntigo = document.getElementById('entrada').value;

    //é um sinal, e se o ultimo caracter tbm
    // condicionais
    document.getElementById('entrada').value = valorAntigo + valorNovo;

}



/**
 * implementar a função "result" para efetuar o calculo
 */