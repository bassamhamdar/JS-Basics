document.querySelector('button').addEventListener('click', ()=>{
    if(document.getElementById('password').value != document.getElementById('confirmation').value){
        document.getElementById('password').style.border = "1px solid red";
        document.getElementById('confirmation').style.border = "1px solid red";

    }
});

