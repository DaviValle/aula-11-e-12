const nome = "João Silva"; 
let idade = 25; 

console.log("Valores iniciais:");
console.log("Nome:", nome);
console.log("Idade:", idade);


idade = 30; 
console.log("\nApós reatribuição:");
console.log("Nova idade:", idade);


const produto = {
    nome: "Notebook",
    valor: 2500.00
};

console.log("\nObjeto produto inicial:");
console.log("Produto:", produto);


console.log("\nApós modificar propriedade valor:");
console.log("Produto:", produto);


produto.categoria = "Eletrônicos";
console.log("\nApós adicionar nova propriedade:");
console.log("Produto:", produto);


console.log("\n--- Demonstração adicional ---");

const carro = {
    marca: "Toyota",
    modelo: "Corolla"
};

console.log("Carro inicial:", carro);


carro.modelo = "Hilux";
carro.ano = 2023;

console.log("Carro modificado:", carro);

