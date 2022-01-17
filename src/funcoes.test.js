const { paraTodos, somar, subtrair, operacao, aplicar } = require('./funcoes');

test('Deve somar dois numeros', () => {
    let res = somar(1, 2);
    expect(res).toBe(3);
});

test('Deve subtrair dois números.', () => {
    expect(subtrair(2, 1)).toBe(1);
});

test('Deve retornar uma função.', () => {
    let minhaSoma = operacao('somar');
    let minhaSubtracao = operacao('subtrair');
    let minhaQQCoisa = operacao('qqcoisa');

    expect(minhaSoma(5, 4)).toBe(9);
    expect(minhaSubtracao(7, 5)).toBe(2);
    expect(minhaQQCoisa).toBeUndefined();
});

test('Deve aplicar uma função.', () => {
    expect(aplicar(somar, 2, 1)).toBe(3);
    expect(aplicar(subtrair, 5, 1)).toBe(4);
});

test('Deve executar a função para todos.', () => {
    let lista = [1, 2, 3, 4];
    let resultado = 0

    let somatorio = (v) => resultado += v;

    paraTodos(lista, somatorio);

    expect(resultado).toBe(10);
});
