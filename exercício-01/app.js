const painel = document.querySelector("#painel");
const botaoTema = document.querySelector("#btn-tema");

botaoTema.addEventListener("click", () => {
    painel.classList.toggle("tema-escuro");
});