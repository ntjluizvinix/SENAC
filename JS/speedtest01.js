function cadastrarPessoa(){
    let nome = document.querySelector("nome").value;
    localStorage.setItem("nome",nome);
}