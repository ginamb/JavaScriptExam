/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btn = document.getElementById('button');
const results = document.getElementById('output');
btn.addEventListener('click', getData);

function getData(){
    return fetch(ENDPOINT).then((data)=>{
        let ivestas = '';
        for(el in data){
            ivestas+=
            <div id="output">`${el.data.login} ${el.data.avatar_url}`</div>
        }
        results.innerHTML = ivestas;
    })
    .catch((err)=>console.log('Error message', err.mesage));
}

//GAM NOTE TO MYSELF 06.13 ANTRA UŽDUOTIS
// res.data.forEach(el => {
//     let div = document.createElement('div');
//     div.textContent = `${el.data.login} ${el.data.avatar_url}`
//     results.appendChild(div);
// });

// function getData() {
//     fetch(ENDPOINT).then(function (res) {
//         return res.json();
//     }).then(function (data) {
//         console.log(res.data)//objekto pasižiūrėjimui
//     });
// }

// // axios.get('https://api.github.com/users').then((res) => {
// //     console.log(res.data);
// // });

