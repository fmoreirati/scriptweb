function saida(texto) {
    document.getElementById("saida").innerHTML = texto;
}

function parimpar(num) {
    if (num % 2 == 0) {
        return "PAR";
    } //else {
    return "Impar";
    //}
}

function grenal(golsGremio, golsInter) {
    if (golsGremio == golsInter) {
        return "Empate";
    } else if (golsGremio > golsInter) {
        return "Gremio"
    } //else {
    return "Inter"
    //}
}

function calcular(valor1, valor2, opc) {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    if (opc == 1) {
        return valor1 + valor2
    } else if (opc == 2) {
        return valor1 - valor2
    } else if (opc == 3) {
        return valor1 / valor2
    } else if (opc == 4) {
        return valor1 * valor2
    } else {
        return "Operação invalida!"
    }
}