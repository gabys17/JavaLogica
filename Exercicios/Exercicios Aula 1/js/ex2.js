alert(`Olá viajante, o seu tanque está cheio para a sua comodidade (30L), Boa viagem!`)
let n1=parseFloat(prompt("Digite a quilometragem inicial"));
let n2=parseFloat(prompt("Digite a quilometragem da parada no posto"));
let km = n2-n1;
let n3=parseFloat(prompt("Digite quantos litros foram reabastecidos no posto"));
let n4=30;
let gas= n4-n3;
let desempenho = km/gas;
alert(`A distância percorrida foi de : ${km} km, e o consumo de gasolina foi: ${gas} L, portanto o veículo desempenhou ${desempenho} km/L`);