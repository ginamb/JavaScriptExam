/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let count = 0;
let btn = document.getAnimations('btn__element');
let number = document.getElementById('btn__state')

    // .btn.addEventListener('click', function () 
   document.addEventListener('click', function () {
        count++;
        number.innerHTML = count;

    });

