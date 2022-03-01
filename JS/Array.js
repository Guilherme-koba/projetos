const residencial = ["terrio", "judite", "matild", "emanuele"]

console.log(residencial);

let newResidencil = residencial.push("jão");
//console.log(newResidencil);

// adicionar valor a última posição
residencial.push("jão")
//console.log(residencial)

//Remover a última posição
residencial.pop()
//console.log(residencial)

//Removendo a primeira posição
//residencial.shift()
//console.log(residencial)

// buscando posição de um array dp cpmteudo
let ops = residencial.indexOf("matild");
console.log(ops);

//buscando indice não existente
//let pos = residencial.indexOf("bruno");
//console.log(pos);

//let itemRemovido = residencial.splice(2,0);

//console.log(residencial);

//console.log(itemRemovido);

//onsole.log(`total pos: ${residencial.length}`)
for(let i = 0; i< residencial.length; i++){
    console.log(`indice: ${i}`);
    console.log(`valor de pos: ${residencial[i]}`);

}