const butonlar = document.querySelectorAll('button');
const goruntu = document.querySelector('.goruntu');

butonlar.forEach(function(button){
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedButtonValue= event.target.value;

    if(clickedButtonValue === '='){
        if(goruntu.value !== ''){
            goruntu.value=eval(goruntu.value);
        } else if (goruntu.value === ''){
            goruntu.value= 'Hata';
        }
    } else if (clickedButtonValue ==='AC'){
        goruntu.value= '';
    } else if(clickedButtonValue === '+/-'){
        goruntu.value= goruntu.value*-1; 
    }else {
        goruntu.value += clickedButtonValue;
    }
}