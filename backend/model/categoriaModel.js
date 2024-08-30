const Database = require('../utils/database');
const banco = new Database();

class categoriaModel{
    #idCat;
    #nomeCat;

    get idCat(){return this.#idCat} set idCat(idCat){this.#idCat = idCat}
    get nomeCat(){return this.#nomeCat} set nomeCat(nomeCat){this.#nomeCat = nomeCat}

    constructor(idCat, nomeCat){
        this.#idCat = idCat;
        this.#nomeCat = nomeCat;
    }

    toJSON(){
        return{
            'idCat' : this.#idCat,
            'nomeCat' : this.#nomeCat
        }
    }

    async gravar(){
        if(this.#idCat == 0){
            let sql = `insert into categoria (nomeCat) values ('?')`;
            let valores = [this.#nomeCat];
            let ok = await banco.ExecutaComandoNonQuery(sql, valores);
            return ok;
        }else{
            let sql = `update categoria set nomeCat = '?' where idCat = ?`;
            let valores = [this.#nomeCat, this.#idCat];
            let ok = await banco.ExecutaComandoNonQuery(sql, valores);
            return ok;
        }
    }

    async listar(){
        let sql = 'select * from categoria';
        let rows = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<rows.length; i++){
            lista.push(new categoriaModel(rows[i].idCat, rows[i].nomeCat));
        }
        return lista;
    }

    async excluir(idCat){
        let sql = 'delete from categoria where idCat = ?';
        let valores = [idCat];
        let ok = await banco.ExecutaComandoNonQuery(sql, valores);
        return ok;
    }
}

module.exports = categoriaModel;