const painel = document.querySelector("#painel");
const botaoTema = document.querySelector("#btn-tema");

if (btn-tema && painel){
    botaoTema.addEventListener("click", () => {
      painel.classList.toggle("tema-escuro");
});
}
