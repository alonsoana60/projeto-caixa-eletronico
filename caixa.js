
//  - Ao clicar em adicionar, deve solicitar que o usuário digite o valor e clicar em 
//      Enter para add

//  - Ao clicar em sacar, deve pedir para o usuário digitar o valor e clicar em Enter para sub

//  - Antes de sacar, deve verificar se o usuário possui saldo suficiente, se não possuir, 
//     deve mostrar uma mensagem e solicitar um valor menor que o saldo.


function saldo(){
    document.querySelector('.display').innerText = 'R$ 10.000,00';
}

function deposit (){
    document.querySelector('.display').innerText = 'Digite o valor que deseja depositar';
        
}

function valor (value){
     const display = document.querySelector('.display');
     if (display.innerText = 'Digite o valor que deseja depositar' && value !== '.'){
         display.innerText = value;
    } else if (display.innerText = 'Digite o valor que deseja sacar' && value !== '.'){
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}


function saque (){
    document.querySelector('.display').innerText = 'Digite o valor que deseja sacar';

}



function corrigir (){
    document.querySelector('.display').slice(0, -1);
}

function cancel (){
    document.querySelector('.display').innerText = "Qual ação deseja realizar?";
}

