const saudacao = document.getElementById("saudacao");
const inputNome = document.getElementById("input-nome");
const inputCargo = document.getElementById("input-cargo");
const btnSalvar = document.getElementById("btn-salvar");

const dadosSalvos = localStorage.getItem("perfil_usuario");

if (dadosSalvos !== null) {
  const dadosObj = JSON.parse(dadosSalvos);

  saudacao.textContent = `Bem-vindo, ${dadosObj.nome} (${dadosObj.cargo}).`;
  inputNome.value = dadosObj.nome;
  inputCargo.value = dadosObj.cargo;
}

btnSalvar.addEventListener("click", () => {
  const perfil = {
    nome: inputNome.value,
    cargo: inputCargo.value,
  };

  localStorage.setItem("perfil_usuario", JSON.stringify(perfil));

  saudacao.textContent = `Bem-vindo, ${perfil.nome} (${perfil.cargo}).`;

  alert("Perfil salvo com sucesso!");
});
