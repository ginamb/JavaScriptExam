/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
    constructor (){
        this.rezult = document.querySelector('#result');
        this.num1 = document.getElementById('#num-1');
        this.num2 = document.querySelector('#num-2');
    }
  
}

const btn = document.querySelector('.button-plus');

// getInputFields(){
//    let num1 = document.getElementById('#num-1');
//    let num2 = document.querySelector('#num-2');
//    let numOne = parseInt(this.numOne.value);
//   let  numTwo = parseInt(this.numTwo.value);
// }

function sum(){
    this.getInputFields();
    if(!isNaN(this.numOne)&& !isNaN (this.numTwo)){
        this.result.textContent = (this.numOne +this.numTwo).toString();
    }
}

function subtraction(){
    this.getInputFields();
    if(!isNaN(this.numOne)&& !isNaN (this.numTwo)){
        this.result.textContent = (this.numOne - this.numTwo).toString();
    }
}

function multiplication(){
    this.getInputFields();
    if(!isNaN(this.numOne)&& !isNaN (this.numTwo)){
        this.result.textContent = (this.numOne * this.numTwo).toString();
    }
}

function division(){
    this.getInputFields();
    if(!isNaN(this.numOne)&& !isNaN (this.numTwo)){
        this.result.textContent = (this.numOne/this.numTwo).toString();
    }
}


btn.addEventListener('click', ()=>{
    if(num1.value &&  num2.value ){
        num1.nextElementSibling.classList.add('hidden');
        num2.nextElementSibling.classList.add('hidden');
        
        result.innerHTML = Number(num1.value) + Number(num2.value);

    }
    if(!num1.value){
        num1.nextElementSiblin.classList.remove('hidden');
    }
    if(!num2.value){
        num2.nextElementSibling.classList.remove('hidden');
    }
});