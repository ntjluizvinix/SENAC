function exibirSoma(){
    var num1 = document.getElementById("número1").value;
    var num2 = document.getElementById("número2").value;
    var soma = Number.parseInt (num1) + Number.parseInt (num2);
    alert (soma);
}