function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function operacao(nomeFuncao) {
    if (nomeFuncao === "somar") {
        return somar;
    }

    if (nomeFuncao === "subtrair") {
        return subtrair;
    }

    return;
}

function aplicar(minhaFuncao, a, b) {
    return minhaFuncao(a, b);
}

function paraTodos(lista, funcao) {
    for (let i = 0; i < lista.length; i++) {
        funcao(lista[i]);
    }
}

module.exports = { somar, subtrair, operacao, aplicar, paraTodos };
