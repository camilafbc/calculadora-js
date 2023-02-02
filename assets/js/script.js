const input = document.getElementById("input-display")
const valorAnterior = document.getElementById("valor-anterior")
const botoes = document.querySelectorAll(".btn-key")
const clearBtn = document.getElementById("clear-btn")
const resultBtn = document.getElementById("result-btn")
const operadores = document.querySelectorAll(".operator-btn")
let operador = ""

clearBtn.addEventListener('click', function(){
    input.value = ""
    valorAnterior.innerText = ""
    operador = ""
})

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.value === "." && input.value.includes(".")){
        return
      } else {
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
    //    } else if(operador == ""){
    //     operador = op.value
    //     // valorAnterior.innerHTML = `${input.value + op.value}`
    //     input.value = input.value + op.value
    //     } 
    //     else if(input.value.includes(operador !== "")){
    //     return} 
    //     else {
    //     calcular()
    //     input.value = input.value + op.value
    //     operador = op.value
    //    }
    

    })
})

resultBtn.addEventListener('click', calcular)

function calcular(){

    let numeros = input.value.split(operador)

    // if (numeros[1] == "") {
    //     input.value = input.value + '0';
    //     numeros[1] = 0;
    // }

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
