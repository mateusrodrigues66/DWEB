/*Elabore um programa em que solicite ao usuário dois números n1 e n2. Realize a subtração dos dois valores. O programa nao deve exibir números negativos*/
var n1, n2, n3;
n1=parseInt(prompt("Digite o valor: "));
n2=parseInt(prompt("Digite outro valor: "));
n3=n1-n2;
if(n3<0){
    alert("Número negativo.");
}
else{
    alert(n3);
}