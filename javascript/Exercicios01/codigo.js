var alunos = [];

//Questão 5a
function resultadoOpt(nome, nota1, nota2, opc) {
    let media = 0;
    let texto = "";
    //Nota optativa
    if (opc != 0) {
        if (nota1 < 6) {
            nota1 = opc;
        } else if (nota2 < 6) {
            nota2 = opc;
        }
    }
    //Calulo da nova media
    media = ((nota1 + nota2) / 2).toFixed(2);
    texto = "<span class='alert alert-info'>" + nome + ". Sua média : " + media + ". ";
    if (media >= 6){
        texto += "Aprovado </span>";
    } else if (media < 3){
        texto += "Reprovado </span>";
    } else {
        texto += "Em exame </span>";
    }
    addAluno({
        nome: nome,
        n1: nota1,
        n2: nota2,
        media: media
    });
    saida(texto + "<br>" + listAluno());
}



//Questao 5
function resultado(nome, nota1, nota2) {
    let media = ((nota1 + nota2) / 2).toFixed(2);
    let texto = "<span class='alert alert-info'>" + nome + ". Sua média : " + media + ". ";
    if (media >= 6) {
        texto += "PARABÉNS! Você foi aprovado!  </span>";
    } else {
        texto += "Você foi REPROVADO! Estude mais... </span> ";
    }
    //document.getElementById("saida").innerHTML = texto
    //saida(texto);
    addAluno({
        nome: nome,
        n1: nota1,
        n2: nota2,
        media: media
    });
    saida(texto + "<br>" + listAluno());
}

function addAluno(aluno) {
    alunos[alunos.length] = aluno;
    console.log(alunos);
}

function listAluno() {
    let texto = "<table class='table'>";
    for (let x = 0; x < alunos.length; x++) {
        texto += "<tr> <td>" + alunos[x].nome + "</td> <td>" + alunos[x].media + "</td> </tr>";
    }
    texto += "</table>";
    return texto;
}

function saida(msg) {
    document.getElementById("saida").innerHTML = msg
}