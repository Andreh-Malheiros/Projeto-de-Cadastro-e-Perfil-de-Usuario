function ExibirDados() {
  var valorNome = localStorage.getItem("nomeValor");
  var valorEmail = localStorage.getItem("emailValor");
  var valorTelefone = localStorage.getItem("telefoneValor");
  var valorCpf = localStorage.getItem("cpfValor");
  var valorSenha = localStorage.getItem("senhaValor");

  document.getElementById("ExibirNome").innerHTML = valorNome;
  document.getElementById("ExibirEmail").innerHTML = valorEmail;
  document.getElementById("ExibirCPF").innerHTML = valorCpf;
  document.getElementById("ExibirTelefone").innerHTML = valorTelefone;
  document.getElementById("ExibirSenha").innerHTML = valorSenha;
}

document.addEventListener("DOMContentLoaded", ExibirDados);

function voltar(){window.location.href="index.html"}