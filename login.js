function verificarLogin() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (email === "admin@fortes.com.br" && senha === "123456") {
    window.location.href = "homeadmin.html";
  } else if (email === "cooperativas@fortes.com.br" && senha === "123456") {
    window.location.href = "homecoop.html";
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }
}