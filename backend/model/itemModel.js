const Database = require('../utils/database');
const banco = new Database();

class itemModel{
    #idItem;
    #nomeItem;
    #quantidade;
    #valorCompra;
    #valorVenda;
    #idCategoria;

    get idItem(){return this.#idItem} set idItem(idItem){this.#idItem = idItem};
    get nomeItem(){return this.#nomeItem} set nomeItem(nomeItem){this.#nomeItem = nomeItem};
    get quantidade(){return this.#quantidade} set quantidade(quantidade){this.#quantidade = quantidade};
    get valorCompra(){return this.#valorCompra} set valorCompra(valorCompra){this.#valorCompra = valorCompra};
    get valorVenda(){return this.#valorVenda} set valorVenda(valorVenda){this.#valorVenda = valorVenda};
    get idCategoria(){return this.#idCategoria} set idCategoria(idCategoria){this.#idCategoria = idCategoria};

    constructor(idItem, nomeItem, quantidade, valorCompra, valorVenda, idCategoria){
        this.#idItem = idItem;
        this.#nomeItem = nomeItem;
        this.#quantidade = quantidade;
        this.#valorCompra = valorCompra;
        this.#valorVenda = valorVenda;
        this.#idCategoria = idCategoria;
    }

    toJSON(){
        return{
            'idItem' : this.#idItem,
            'nomeItem' : this.#nomeItem,
            'quantidade' : this.#quantidade,
            'valorCompra' : this.#valorCompra,
            'valorVenda' : this.#valorVenda,
            'idCategoria' : this.#idCategoria
        }
    }

    async gravar(){
        if(this.#idItem == 0){
            let sql = `insert into itens (nomeItem, quantidade, valorCompra, valorVenda, cat) values (?, ?, ?, ?, ?)`;
            let valores = [this.#nomeItem, this.#quantidade, this.#valorCompra, this.#valorVenda, this.#idCategoria];
            let ok = await banco.ExecutaComandoNonQuery(sql, valores);
            return ok;
        }else{
            let sql = `update itens set nomeItem = ?, quantidade = ?, valorCompra = ?, valorVenda = ?, cat = ? where idItem = ?`;
            let valores = [this.#nomeItem, this.#quantidade, this.#valorCompra, this.#valorVenda, this.#idCategoria, this.#idItem];
            let ok = await banco.ExecutaComandoNonQuery(sql, valores);
            return ok;
        }
    }

    async listar(){
        let sql = 'select * from itens';
        let rows = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<rows.length; i++){
            lista.push(new itemModel(rows[i].idItem, rows[i].nomeItem, rows[i].quantidade, rows[i].valorCompra, rows[i].valorVenda, rows[i].idCategoria));
        }
        return lista;
    }

    async excluir(idItem){
        let sql = 'delete from itens where idItem = ?';
        let valores = [idItem];
        let ok = await banco.ExecutaComandoNonQuery(sql, valores);
        return ok;
    }
}

module.exports = itemModel;