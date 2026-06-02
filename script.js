document.addEventListener("DOMContentLoaded", function () {
    const btnChangeText = document.getElementById("btn-change-text");
    const welcomeText = document.getElementById("welcome-text");

    btnChangeText.addEventListener("click", function () {
        welcomeText.textContent = "🚀 Você deu o primeiro passo! O desenvolvimento web é a arte de transformar ideias em códigos. Continue estudando!";
        welcomeText.style.color = "#27ae60";
        welcomeText.style.fontWeight = "bold";
    });

    const btnConsole = document.getElementById("btn-console");

    btnConsole.addEventListener("click", function () {
        console.log("=========================================");
        console.log("Log acionado pelo Portal WebCode!");
        console.log("Status do projeto: Desenvolvido com sucesso.");
        console.log("Alunos ativos: Erick e equipe.");
        console.log("=========================================");
    });

    const btnAlert = document.getElementById("btn-alert");

    btnAlert.addEventListener("click", function () {
        alert("👋 Parabéns! Você interagiu com o JavaScript do Portal WebCode!");
    });
});