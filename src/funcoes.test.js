const { somar, subtrair, operacao, aplicar, paraTodos, mapear, filtrar, reduzir } = require('./funcoes');

test('Deve somar dois números.', () => {
    expect(somar(1, 2)).toBe(3);
});

test('Deve subtrair dois números.', () => {
    expect(subtrair(2, 1)).toBe(1);
});

test('Deve retornar uma função.', () => {
    expect(operacao('somar')(1, 2)).toBe(3);
    expect(operacao('subtrair')(5, 4)).toBe(1);
    expect(operacao('foo')).toBeUndefined();
});

test('Deve aplicar uma função.', () => {
    expect(aplicar(somar, 2, 1)).toBe(3);
    expect(aplicar(subtrair, 5, 1)).toBe(4);
});


test('Deve executar a função para todos.', () => {
    let lista = [1, 2, 3, 4];
    let buffer = ''
    let armazenar = (v) => buffer += v;
    paraTodos(lista, armazenar);
    expect(buffer).toBe("1234");
});

test('Deve mapear a função.', () => {
    let lista = [1, 2, 3, 4];
    let inc = (v) => v + 1
    let res = mapear(lista, inc);
    expect(res).toEqual([2, 3, 4, 5]);
});

test('Deve filtrar os valores.', () => {
    let lista = [1, 2, 3, 4];
    let ehPar = (v) => v % 2 === 0;
    let res = filtrar(lista, ehPar);
    expect(res).toEqual([2, 4]);
});

test('Deve reduzir uma lista.', () => {
    let lista = [1, 2, 3, 4];
    let res = reduzir(lista, somar, 0);
    expect(res).toEqual(10);
});