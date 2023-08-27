document.getElementById("pagarButton").addEventListener("click", function() {
    var numeroCartao = document.getElementById("numeroCartao").value;
    var validade = document.getElementById("validade").value;
    var codigoSeguranca = document.getElementById("codigoSeguranca").value;
    var nomeTitular = document.getElementById("nomeTitular").value;
    
    if (numeroCartao && validade && codigoSeguranca && nomeTitular) {
      // Simulação de processamento de pagamento
      alert("Pagamento bem-sucedido!");
    } else {
      alert("Por favor, preencha todos os campos do formulário.");
    }
  });
  