const getSum = () => {
  const firstNum = parseInt(document.getElementById('firstNumber').value)
  const secondNum = parseInt(document.getElementById('secondNumber').value)
  const sum = firstNum + secondNum
  document.getElementById('result').innerHTML = sum
}
