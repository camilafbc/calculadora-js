const input = document.getElementById("input-display")
const botoes = document.querySelectorAll(".btn-key")
const clearAllBtn = document.getElementById("clear-all-btn")
const clearBtn = document.getElementById("clear-btn")
const resultBtn = document.getElementById("result-btn")
const operadores = document.querySelectorAll(".operator-btn")
let operador = ""


botoes.forEach(btn => {
    btn.addEventListener('click', () => {

      let numeros = input.value.split(operador)

      if(btn.value === "." && numeros[0].includes(".") && numeros[1].includes(".")) return
      else {
        input.value = input.value + btn.value
      }
    })
})

operadores.forEach(op => {
    op.addEventListener('click', () => {  
       if(input.value === "") return
       else if(operador ==""){
        operador = op.value
        input.value = input.value + operador
       }
    })
})

clearBtn.addEventListener('click', () => {
    if(input.value.includes(operador!=="")){
        input.value = input.value.slice(0,-1)
    } else {
        input.value = input.value.slice(0,-1)
        operador = ""
    }
})

clearAllBtn.addEventListener('click', () => {
    input.value = ""
    operador = ""
})

resultBtn.addEventListener('click', calcular)

function calcular(){

    const numeros = input.value.split(operador)


    if(numeros[1] === "") return

    switch (operador) {
        case "+":
            input.value = parseFloat(numeros[0]) + parseFloat(numeros[1])
            operador = ""
            break;

        case "-":
            input.value = parseFloat(numeros[0]) - parseFloat(numeros[1])
            operador = ""
            break;

        case "x": 
            input.value = parseFloat(numeros[0]) * parseFloat(numeros[1])
            operador = ""
            break;

        case "/":
            input.value = parseFloat(numeros[0]) / parseFloat(numeros[1])
            operador = ""
            break; 
    }
}
