let listaProdutos = [];

function listar(){
    return listaProdutos;
}
function inserir(Produto){    
    if(produto && produto.nome && produto.preco){
        Produto.id = idAutoincrement++;
        listaProdutos.push(produto);
    }

    else {
        throw{
            numero: 400,
            msg: "Erro: os parâmetros de produtos estão inválidos"
        };
    }
}

function buscarPorId(id){
    for(let produto of listaProdutos){
        if(produto.id === id){
            return produto;
        }
    }
    // lançar erro!
    //throw ({id: 404, erro: "Id não encontrado"});
    throw{
        numero: 404,
        msg: "Erro: os parâmetros de produtos estão inválidos."
    };  
    
}

function atualizar(id, produtoAlterar) {
    if(!produtoAlterar|| !produtoAlterar.nome || !produto.preco){
        throw{
            numero: 404,
            msg: "Erro: Produto não encontrado."
        };
    }

    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id) {
            listaProdutos[indice] = id;
            listaProdutos[indice] = produtoAlterar;
        }
    }
}
function deletar(id){
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id){
            const produtoDeletado = listaProdutos.splice(indice,1);
            return produtoDeletado;
        }
    }
    throw{
        numero: 404,
        msg: "Erro: Produto não encontrado."
    };
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}