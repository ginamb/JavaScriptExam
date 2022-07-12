/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const weightInput = document.getElementById('weight')
const form = document.getElementById('form');



function convertSvoris(event){
    const weightInput = event.target.value;
    const outputElement = document.getElementById('output');
    if (weightInput){
        const kilogramai = Number(weightInput);
        const svarai=((kilogramai*2.2046).toFixed(2));
        const gramai=((kilogramai/0.0010000).toFixed(2));
        const uncijos=((kilogramai*35.247).toFixed(2));
        outputElement.innerText=` Įvestas kūno svoris svarais yra ${svarai} gramais yra ${gramai} ir uncijomis yra ${uncijos}` ;
    }else{
        outputElement.innerText=`Įveskite kūno svorį`
    }
}
document.getElementById('weight').addEventListener('input',convertSvoris);