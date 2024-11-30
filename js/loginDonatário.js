const validCredentials = {
    email: "donatario01",
    password: "dona123"
};

function login() {

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    if (emailInput === '' && passwordInput === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificando se os campos estão preenchidos
    if (!emailInput || !passwordInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validando as credenciais
    if (emailInput === validCredentials.email && passwordInput === validCredentials.password) {
        alert("Login realizado com sucesso!");
        // Redirecionar para outra página ou liberar o acesso
        window.location.href = "../pages/dadosDonatario.html";
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
}

// Adiciona um evento ao pressionar Enter no formulário
document.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada é Enter
    if (event.key === "Enter") {
        login();
    }
});

