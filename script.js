document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário enquanto validamos os campos
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    
    const errorMessage = document.getElementById("error-message");
    
    if (!nome || !email || !mensagem) {
        errorMessage.textContent = "Por favor, preencha todos os campos!";
        errorMessage.style.display = "block";
    } else {
        // Se os campos estiverem preenchidos corretamente, podemos simular um envio de formulário
        errorMessage.style.display = "none";
        alert("Formulário enviado com sucesso!");
        document.getElementById("formContato").reset(); // Limpa o formulário
    }
});
