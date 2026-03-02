const nota1Input = document.querySelector("#nota1");
const nota2Input = document.querySelector("#nota2");
const btnCalcular = document.querySelector("#btn-calcular");
const resultadoMedia = document.querySelector("#resultado-media");

btnCalcular.addEventListener("click", () => {
  const nota1 = parseFloat(nota1Input.value);
  const nota2 = parseFloat(nota2Input.value);
  const media = (nota1 + nota2) / 2;

  if (isNaN(media)) {
    resultadoMedia.textContent = "Por favor, insira notas válidas.";
    resultadoMedia.className = "";
  } else if (media >= 7) {
    resultadoMedia.textContent = `Média: ${media.toFixed(1)} - Aprovado`;
    resultadoMedia.className = "aprovado";
  } else {
    resultadoMedia.textContent = `Média: ${media.toFixed(1)} - Reprovado`;
    resultadoMedia.className = "reprovado";
  }
});