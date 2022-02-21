/*function nomeFuncao(){
   console.log("primera mensagem")
    //escopo
    return undefined;
}
nomeFuncao()*/

let tarefa = "fazer" // global 
//torradeira()


function torradeira(){
    let alimento = "torrada"; // local
    console.log("* " + tarefa + "esquntar" + alimento);
    return undefined;
}
console.log(tarefa); 


function cafeteira(){
    console.log("café");
    return undefined;
}
function prime(tipoConteudo){ //parametro
    console.log("Exibir" + tipoConteudo);
    return undefined;
}

function spotfy(){
    console.log("musica");
    return undefined;
}

function ifood(){
    let statusPedido = "saiu para entrega";
    console.log("* fazer compra");
    console.log("statusPedido");
    return statusPedido;
}
let sompraIfood = ifood();
console.log("compraIfood");


prime(" filme")
prime(" serie")
prime(" anime")

torradeira()
cafeteira()
prime()
spotfy()
ifood()
