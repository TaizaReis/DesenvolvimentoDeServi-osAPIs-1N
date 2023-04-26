const cadastro = require('./cadastro_produtos')

test('Listar produtos sem cadasrar deve retornar vazio', () => {
    expect(cadastro.listar()).toEqual([]);
    expect(cadastro.listar().length).toBe(0);
})