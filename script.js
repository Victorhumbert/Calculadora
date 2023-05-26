const input = document.querySelector("input");
const clear = document.getElementById("clear");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");

function clearInput() {
  input.value = "";
}
clear.addEventListener("click", clearInput);

function adicionarNumero(numero) {
  const numSelecionado = numero.currentTarget.innerText;
  const concatenar = input.value + numSelecionado;
  const transform = parseFloat(concatenar);
  input.value = transform;

  function operacao(operador) {
    const opeSelecionado = operador.currentTarget.innerText;
    const primeiroNum = parseFloat(input.value);
    console.log(primeiroNum);
    clearInput();

    if (opeSelecionado === "+") {
      const segundoNum = 2;
      const total = primeiroNum + segundoNum;
      input.value = total;
      console.log(total);
    }
  }

  operadores.forEach((operadores) => {
    operadores.addEventListener("click", operacao);
  });

}

numeros.forEach((numero) => {
  numero.addEventListener("click", adicionarNumero);
});
