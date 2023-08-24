//     Exercício caixa eletrônico
//     Crie um layout para um caixa eletrônico
//     Deve ter:
//     - botões para os números (x)
//     - um botão para mostrar o saldo (x)
//     - um botão para adicionar dinheiro (x)
//     - um botão para sacar dinheiro (x)
//     - os botões Enter, Corrigir, e Cancelar. (x)
//     - Deve iniciar mostrando uma msg para o usuário realizar uma das ações possíveis 
//         (visualizar saldo, add dinheiro ou sac dinheiro) (x)
//     - Ao clicar no botão de saldo, deve mostrar o saldo (x)
//     - Ao clicar em adicionar, deve solicitar que o usuário digite o valor e clicar 
//          em Enter para add
//     - Ao clicar em sacar, deve pedir para o usuário digitar o valor e clicar em 
//           Enter para sub
//     - Antes de sacar, deve verificar se o usuário possui saldo suficiente, se não possuir, 
//         deve mostrar uma mensagem e solicitar um valor menor que o saldo.
//     - Ao clicar em Corrigir, deve voltar o último número digitado.
//     - Ao clicar em Cancelar deve anular e voltar para msg inicial. (x)
//     - O saldo inicial deve ser de R$10000.00 (x)

let conta = 10000;
let calculo = "";
const msgBase = 'Qual ação deseja realizar?';
const valorSaldo = 'Seu saldo atual é de: '
const valorDeposito = 'Digite o valor que deseja depositar'
const valorSaque = 'Digite o valor que deseja sacar'


function cancel (){
    document.querySelector('.display h2').innerText = msgBase;
    document.querySelector('.display h3').innerText = "";
    document.querySelector('.display h4').innerText = "";

}

function saldo(){
    document.querySelector('.display h2').innerText = valorSaldo;
    document.querySelector('.display h3').innerText = conta;
}

function valor (value) {
    const displayNumeros = document.querySelector('.display h4');
    if (displayNumeros.textContent === '0' && value !== '.'){
        displayNumeros.innerText = value;
    } else {
        displayNumeros.innerText += value;
    }
}

function corrigir (){
    const display3 = document.querySelector('.display h4');
    display3.innerText = display3.innerText.slice (0, -1);
}


function result () {
    const display2 = document.querySelector('.display h3')
    console.log(display2.textContent);
    const display3 = document.querySelector('.display h4')
    console.log(display3.textContent);
    let novoSaldo;
    if (calculo === "+"){
        novoSaldo = conta + parseFloat(display3.textContent);
    } else {
        novoSaldo = conta - parseFloat(display3.textContent);
    }
    document.querySelector('.display h3').textContent = novoSaldo;
    document.querySelector('.display h4').textContent = "";
    conta = novoSaldo
}

function deposit (){
    document.querySelector('.display h2').innerText = valorDeposito;
    calculo = "+";
}

function saque (){
    document.querySelector('.display h2').innerText = valorSaque;
    calculo = "-";
}
