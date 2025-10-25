
console.log("Script carregado com sucesso!");

const titulo = document.getElementById("titulo");
titulo.textContent = "Título Alterado pelo JavaScript";

const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
    alert("Botão clicado! Esta é uma mensagem de alerta.");
});