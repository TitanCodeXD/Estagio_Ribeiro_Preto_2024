// Código Javascript - Questão 5

function inverter(str) {

let invertido = "";

for (let i = str.length - 1; i >= 0; i--){
    invertido += str[i];
};

return invertido;

}

console.log(inverter("tomate"));
