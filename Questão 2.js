// Código Javascript - Questão 2
function fibonacci(numero) {
let num1 = 0;
let num2 = 1;
let proximo = num1 + num2;

while (proximo <= numero) {
        if (proximo === numero) {
            return true;
            
        } else {
        num1 = num2;
        num2 = proximo;
        proximo = num1 + num2;
    };

    return false;
};

}

const teste = 4; //número para ser testado
if (fibonacci(teste)) {
    console.log(`${teste} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${teste} não pertence à sequência de Fibonacci.`);
}
