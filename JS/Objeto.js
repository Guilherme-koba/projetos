let usuario = {
  nome: "gui",
  idade: 21,
  email: "guikoba2@gmail.com",
  anotacao: ["primeiro artigo", "sefundo artigo"],
  localusuario: "São Paulo"
}

console.log(usuario);

//console.log(`nome usuário: ${usuario.nome}`);

//console.log(`email usuário: ${usuario["email"]}`);

//usuario.localusuario  = "novo Local"


let funcionarios = [
    {
        nome: "gui",
        idade: 21,
        email: "guikoba2@gmail.com",
        cargo: ["cargo 1", "cargo 2"],
        local: "São Paulo"
      },
      {
        nome: "marco",
        idade: 21,
        email: "guikoba2@gmail.com",
        cargo: ["cargo 1", "cargo 2"],
        local: "São Paulo"
      },
      {
        nome: "bona",
        idade: 21,
        email: "guikoba2@gmail.com",
        cargo: ["cargo 1", "cargo 2"],
        local: "São Paulo"
      }

]    

function lerArrDeobjetos(arr){
   
    console.log(arr);
  let arrResultado = [];
      for(let i = 0; i< arr.length; i++){
       console.log(arr[i]);  
       console.log(arr[i],nome);  
       console.log(arr[i]["nome"]);
       console.log(arr[i],email);    
       arrResultado.push(arr[i].email)
      }

    return arrResultado;
}

//console.log (lerArrDeobjetos(funcionarios));

//let arrEmailFuncionarios = lerArrDeobjetos(funcionarios);

//console.log(arrEmailFuncionario);

function ciedadeFuncionarios(arr){
    const arrResult = [];

     for(let i =0; i< arr.length; i ++){

        //console.log(arr[i].local);

        if (arr[i].local === "São Paulo"){
            arrResult.push(arr[i].nome);
        }
     }
  //console.log(arrResult);
    return arrResultado;
}

//console.log(ciedadeFuncionarios(funcionarios))


