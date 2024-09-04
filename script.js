const bill = document.getElementById('bill');
const buttons = document.querySelectorAll('.tip-container div button');
const people = document.getElementById('people');
const btnReset = document.getElementById('btn-reset');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');

let billValue, porcentagem, peopleValue;

bill.addEventListener('input', function() {
    billValue = bill.value;
    billValue = parseInt(billValue);
    console.log(billValue); // Exibe o valor no console sempre que o input mudar
    return billValue;
});

buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(btn => btn.classList.remove('active')); //Remove a classe de todos os botoes
        this.classList.add('active'); //Adiciona para o botao clicado
        porcentagem = this.innerHTML;
        porcentagem = porcentagem.slice(0, -1) + ' ';
        porcentagem *= 0.01;
        console.log(porcentagem);
        return porcentagem;
    })
})

people.addEventListener('input', function() {
    peopleValue = people.value;
    peopleValue = parseInt(peopleValue);
    console.log(peopleValue); // Exibe o valor no console sempre que o input mudar
    return peopleValue;
});

document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('change', function() {
        billValue;
        porcentagem;
        peopleValue;

        console.log(porcentagem);

        let calcTipPerPerson = (billValue * porcentagem) / peopleValue;

        let calcTotalPerPerson = billValue / peopleValue;

        tipPerPerson.textContent = "$" + calcTipPerPerson.toFixed(2);
        totalPerPerson.textContent = "$" + calcTotalPerPerson.toFixed(2);
    })
})

btnReset.addEventListener('click', function() {
    bill.value = 0;
    buttons.forEach(btn => btn.classList.remove('active'))
    porcentagem = 0;
    people.value = 0;

    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
});

