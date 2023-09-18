function exibirIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    alert (peso / (altura * altura));
}