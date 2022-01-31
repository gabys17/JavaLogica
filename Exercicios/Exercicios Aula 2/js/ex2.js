alert(`Consulte aqui o valor do seu crédito`)
let n1=parseFloat(prompt("Insira o saldo médio do último ano"));

if (n1 >= 0 && n1 <= 200){
    c1 = 0;
    alert(`Este ano não terá crédito, o seu saldo médio foi abaixo de 200`);
}
else if (n1 >= 201 && n1 <= 400){
    c2 = n1 * 0.20;
    alert(`O seu crédito será de 20%, totalizando ${c2}`);
}
else if (n1 >= 401 && n1 <= 601){
    c3 = n1 * 0.30;
    alert(`O seu crédito será de 30%, totalizando ${c3}`);
}
else {
    c4 = n1 * 0.40;
    alert(`O seu crédito será de 40%, totalizando ${c4}`);
}