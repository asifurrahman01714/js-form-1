// const ul = document.querySelector('.items');
// ul.children[0].innerText='Hello';
// ul.children[1].innerText='How are you';
// ul.children[2].innerHTML='<h1 style="color:red">I am fine</h1>';

// const btn = document.querySelector('.btn');

// btn.style.background='#803';
// btn.addEventListener('mouseover',function(){
//     btn.style.background='black';
// });

const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');
btn.addEventListener('click', function(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value===''){
        msg.innerHTML='please fill the field';
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 3000);
        //alert('Fill the input field');
    }
    else{
        //alert('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userlist.appendChild(li);
        nameInput.value='';
        emailInput.value=''
    }
});


    
   



