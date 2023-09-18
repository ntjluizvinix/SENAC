function exibirDia(){
    var number = document.getElementById("semana").value;
    if (number == 1)
    alert ("Domingo");
    else if (number == 2)
    alert ("Segunda-Feira");
    else if (number == 3)
    alert ("Terça-Feira");
    else if (number == 4)
    alert ("Quarta-Feira");
    else if (number == 5)
    alert ("Quinta-Feira");
    else if (number == 6)
    alert ("Sexta-Feira");
    else if (number == 7)
    alert ("Sábado");
    else if (number > 7)
    alert ("Número Incorreto");
    else if (number < 1)
    alert ("Número Incorreto");
    else if (number == 0)
    alert ("Número Incorreto");
        
 }