var anoNasc, aprovacao;

anoNasc=parseInt(prompt("Digite o ano de nascimento: "));
aprovacao=prompt("Digite S para aprovado e N para reprovado");
if(anoNasc>2004){
    alert("Inapto por ser menor de idade.");
}
else if(aprovacao=="N"){
    alert("Inapto por não ter sido aprovado na prova de direção.")
}
else {
    alert("Apto.");
}