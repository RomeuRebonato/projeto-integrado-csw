function validarendereco() {
    const inputs = document.querySelectorAll("input[required]");
    for (const input of inputs) {
      if (!input.value.trim()) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        input.focus();
        return false;
      }
    }

    window.location.href = "pontoslocalizados.html";
    return false;
  }

function abrirmaps() {
      window.open("https://www.google.com/maps?q=Av+tal+000+Vitória+ES", "_blank");
    }

function confirmarinteresse() {
      alert("Interesse confirmado");
      window.location.href = "residuosdisponiveis.html";
    }

function validarformulario() {
    const form = document.querySelector("form");
    if (form.checkValidity()) {
      alert("Ponto registrado com sucesso!");
      window.location.href = "homeadmin.html";
      return false;
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }