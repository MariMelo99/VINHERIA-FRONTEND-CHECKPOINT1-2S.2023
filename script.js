document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    console.log("Nome: " + nome);
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);
  });