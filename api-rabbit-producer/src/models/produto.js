module.exports = class Produto {

    constructor(id, nome, categoria, dataCadastro, preco) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.dataCadastro = dataCadastro;
        this.preco = preco;
    }
}