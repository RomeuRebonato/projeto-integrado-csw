 
    function confirmarRegistro() {
      const tipo = document.getElementById("tipo-residuo").value.trim();
      const qtd = document.getElementById("quantidade-residuo").value.trim();

      if (!tipo || !qtd) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }

      alert("Registro confirmado com sucesso!")
      window.location.href = "pontoslocalizados.html";
    }