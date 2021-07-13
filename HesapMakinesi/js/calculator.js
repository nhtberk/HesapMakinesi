const buttons = document.querySelectorAll('button');
const goruntu = document.querySelector('.goruntu');

buttons.forEach(function(button){
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedButtonValue= event.target.value;

    if(clickedButtonValue === '='){
        if(goruntu.value !== ''){
            goruntu.value=eval(goruntu.value);
        }
    }else if(clickedButtonValue ==='AC'){
        goruntu.value= '';
    } else if(clickedButtonValue === '+/-'){
        goruntu.value= goruntu.value*-1; 
    }else if(clickedButtonValue === '') {
        
    } else {
        goruntu.value += clickedButtonValue;
    }
}