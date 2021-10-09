module.exports = class Venda {
    constructor(cliente, produto, quantidade){
        this.cliente = cliente;
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorTotal = produto.preco * this.quantidade;

    }
    
}