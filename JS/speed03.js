document.addEventListener("DOMContentLoaded",function(){
    escreverMensagem()
})

function escreverMensagem(){
    let nome = localStorage.getItem("nome")
    let numero = localStorage.getItem("numero")
    let valor = localStorage.getItem("valor")
    let gorjeta1 = (valor / 10)
    let gorjeta2 = (gorjeta1 / 2)
    let gorjeta3 = (gorjeta1 + gorjeta2)
    let resp = document.querySelector("p")
    resp.innerHTML = `COMANDA - Garçom: ${nome}` + `; N°: ${numero}` + `; Valor Total: ${valor};` + ` Gorjeta: ${gorjeta3}`
    
}