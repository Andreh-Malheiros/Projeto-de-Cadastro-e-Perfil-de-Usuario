const modal = document.getElementById("formulario");
const loginButton = document.getElementById("loginButton");
const closeButton = document.getElementById("close-button");

loginButton.onclick = function () {
  modal.style.display = "flex";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

function mascaraCelular() {
  var tel = document.getElementById("telefone").value;
  tel = tel.slice(0, 14);

  document.getElementById("telefone").value = tel;

  var tel_formatado = document.getElementById("telefone").value;
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("telefone").value = "(" + tel_formatado[0];
    }
  }

  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("telefone").value =
        tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
    }
  }

  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("telefone").value =
        tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
    }
  }
}

function mascaraCpf() {
  var cpf = document.getElementById("cpf").value;
  cpf = cpf.slice(0, 14);

  document.getElementById("cpf").value = cpf;

  var cpfFormatado = document.getElementById("cpf").value;
  if (cpfFormatado[3] != ".") {
    if (cpfFormatado[3] != undefined) {
      document.getElementById("cpf").value =
        cpfFormatado.slice(0, 3) + "." + cpfFormatado[3];
    }
  }

  if (cpfFormatado[7] != ".") {
    if (cpfFormatado[7] != undefined) {
      document.getElementById("cpf").value =
        cpfFormatado.slice(0, 7) + "." + cpfFormatado[7];
    }
  }

  if (cpfFormatado[11] != "-") {
    if (cpfFormatado[11] != undefined) {
      document.getElementById("cpf").value =
        cpfFormatado.slice(0, 11) + "-" + cpfFormatado[11];
    }
  }
}

function salvarDados() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var cpf = document.getElementById("cpf").value;
  var senha = document.getElementById("senha").value;

  if (nome != "" && email != "" && telefone != "" && cpf != "" && senha != "") {
    localStorage.setItem("nomeValor", nome);
    localStorage.setItem("emailValor", email);
    localStorage.setItem("telefoneValor", telefone);
    localStorage.setItem("cpfValor", cpf);
    localStorage.setItem("senhaValor", senha);

    LimparCampos();

    alert("Dados Cadastrados com Sucesso!");
    window.location.href = "usuario.html";
  } else {
    alert("Preencha os dados Corretamente!");
    LimparCampos();
  }
}

function LimparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("senha").value = "";
}
