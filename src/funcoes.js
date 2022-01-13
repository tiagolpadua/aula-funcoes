function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function operacao(nome) {
    if (nome === 'somar') {
        return somar;
    }

    if (nome === 'subtrair') {
        return subtrair;
    }

    return undefined;
}

function aplicar(funcao, par1, par2) {
    return funcao(par1, par2);
}

function paraTodos(l, f) {
    for (let i = 0; i < l.length; i++) {
        f(l[i]);
    }
}

function mapear(l, f) {
    let ret = [];
    paraTodos(l, (v) => ret.push(f(v)));
    return ret;
}

function filtrar(l, f) {
    let ret = [];
    paraTodos(l, (v) => {
        if (f(v) === true) {
            ret.push(v);
        }
    });
    return ret;
}

function reduzir(l, f, inicial) {
    let res = inicial;
    paraTodos(l, (v) => {
        res = f(v, res);
    });
    return res;
}

module.exports = { somar, subtrair, operacao, aplicar, paraTodos, mapear, filtrar, reduzir };