const prompt = require('prompt-sync')();
var novoLivro = [];

do {
  console.log("Sistema de Cadastro de Livros");
  console.log("1 - Inserir um Livro");
  console.log("2 - Excluir um Livro");
  console.log("3 - Lista de Livro(s");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Livro...\n");
    let seletor = parseInt(prompt("Digite o seletor: "));
    let titulo = prompt("Digite o titulo: ");
    let autor = prompt("Digite o autor: ");
    let editora = prompt("Digite o editora: ");
    let categoria = prompt("Digite o categoria: ");

    // Neste trecho estamos declarando um objeto
    const livros = {
      seletor: seletor,
      titulo: titulo,
      autor: autor,
      editora: editora,
      categoria: categoria
    }
    // Chamar a função inserir
    inserirLivro(livros);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Livro...\n");
    let seletor = prompt("Digite o seletor do Livro: ");
    // Chamar a função excluir
    excluirLivro(seletor)

  } else if (opcao == 3) {
    console.log("\n\nListando Livros...\n");
    // Chamar a função listar
    listarLivro()

  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserirLivro(livros) {
  // Implementar corpo da função 
  novoLivro.push(livros);
  livros++;    
}

function excluirLivro(seletor) {
  // Implementar corpo da função
  for (let achei = 0; achei <= novoLivro.length; achei++) {
    let excluir = novoLivro[achei];    

    if (seletor == excluir.seletor) {      
      novoLivro.splice(excluir.seletor, 1);      
    } 
  }
}

function listarLivro() {
  // Implementar corpo da função
  for (let total = 0; total < novoLivro.length; total++) {
    const element = novoLivro[total];
    
  
    console.log(element.seletor," : " ,element.titulo," - ",element.autor, " - ",element.editora, " - ",element.categoria);
  }

  
  
}



