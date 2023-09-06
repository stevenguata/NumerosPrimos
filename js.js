const txtOp1 = document.getElementById("op1")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
  const op1 = parseFloat(txtOp1.value)
  if (op1 % 2 === 0) {
    pResultado.innerText = "el numero"+" "+ op1 +" "+"es par"
  }else
  pResultado.innerText = "el numero"+" "+ op1 +" "+"es impar"
  
}