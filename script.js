function bank_Card() {
    let value1 = document.getElementById("num1").value
    let value2 = document.getElementById("num2").value
    let value3 = document.getElementById("num3").value
    let percent =  (value3 * (value2 * 0.01)) / value1
    let result = ((value3 / value1) + percent)
    document.getElementById('result').value = result
}