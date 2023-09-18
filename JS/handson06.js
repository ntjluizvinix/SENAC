function exibirResultado(){
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var soma = Number.parseInt (nota1) + Number.parseInt (nota2) + Number.parseInt (nota3);
    alert (soma / 3);
}