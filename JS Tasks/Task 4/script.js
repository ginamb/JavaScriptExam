/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
// const ENDPOINT = 'cars.json';
const btn = document.querySelector('button');
const results = document.querySelector('.results');
btn.addEventListener('click', getData);

function getData() {
    fetch("./cars.json")
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data);
            data.forEach(el => {
                let div = document.createElement('div');
                div.textContent = `${el.data}`
                results.appendChild(div)
            });
        })
}

    // .then(function(data){
    //     console.log(data);
    // });
//     .then((data)=>{
//         let output ='';
//         for(el in data){
//             output +=`
//             <h3> ${data [el].brand}
//             <p>${data [el].model}`;
//         }
//         document.getElementById('.results').innerHTML
//     })
//     .catch((err)=>console.log('Error message', err.message));
// }


// data.results.forEach(el=>{
//     let div = document.createElement('div');
//     div.textContent=`${el.data.brand} ${el.data.model}`;
//     results.appendChild(div);
// })


