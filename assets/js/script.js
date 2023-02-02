const input = document.getElementById("input-display")
const botoes = document.querySelectorAll(".btn-key")
const clearBtn = document.getElementById("clear-btn")
const resultBtn = document.getElementById("result-btn")
const operadores = document.querySelectorAll("operator-btn")

clearBtn.addEventListener('click', function(){
    input.value = ""
})

botoes.forEach(function(btn){
    btn.addEventListener('click', function(ev){
        if(input.value === "0"){
            input.value = btn.value
        } else {
            input.value += btn.value
        }
    })
})

operadores.forEach(function(operador){
    operador.addEventListener('click', function(){
        // if(input.value !== ""){
        //     // let operacao = operador.value
        //     input.value += operacao
        //     // return operacao
        // }
        input.value += operador.value
    })
})

resultBtn.addEventListener('click', calculate)

function calculate(operador){
    const getCount = input.value
    let teste = getCount.split(operador)
    console.log(teste)
}


// TESTE COM MÉTODO SPLIT
// function calculate(){
//     const getCount = input.value
//     let teste = getCount.split(operador)

//     let soma = parseFloat(teste[0]) + parseFloat(teste[1])
//     teste[0] = soma
//     console.log(soma)
//     console.log(teste)

//     // switch (operador) {
//     //     case "+":
//     //         let resultado = parseFloat(teste[0]) + parseFloat(teste[1])
//     //         return resultado
//     //         console.log(resultado)
//     //         break;
    
//     //     default:
//     //         break;
//     // }
// }