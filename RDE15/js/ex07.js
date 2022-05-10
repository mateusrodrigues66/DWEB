/* Fazer um programa dizendo se um número é maio que outro*/
var a, b, c;
a=parseInt(prompt("Digite um valor: "));
b=parseInt(prompt("Digite outro valor: "));
if(a>b){
    alert(a+" É maior que "+b);
}
else if(a<b){
    alert(a+" É menor que "+b);
}
else if(a==b){
    alert("Os valores s~ão iguais.");
}
