let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    var answer = window.confirm("clear all data ?");
    if (answer){
        inputs.forEach(input => input.value = "");
    }


});