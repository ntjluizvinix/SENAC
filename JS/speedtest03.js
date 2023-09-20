function cadastrarComanda(){
    let nome = document.querySelector("#nome").value
    localStorage.setItem("nome",nome)
    window.location.href = "welcom.html"
    let numero = document.querySelector("#numero").value
    localStorage.setItem("numero",numero)
    window.location.href = "welcom.html"
    let valor = document.querySelector("#valor").value
    localStorage.setItem("valor",valor)
    window.location.href = "welcom.html"
}