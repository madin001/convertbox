
// const elForm =document.querySelector("#form");
// const elInput =document.querySelector("#input");
// const elSelect =document.querySelector("#select");
// // const elButton =document.querySelector("btn");


const elTitle =document.querySelector("#title");

let dollar = 10695.23;
let euro = 12689.89;
let somoni = 944.05;
let rubl = 145.98;
let lira = 1286.18;

form.addEventListener('submit', function(e){
    e.preventDefault();

  

    let inputValue = input.value.trim()


    if (select.value === 'dollar'){
       let natija =elTitle.textContent=(inputValue/dollar).toFixed(2) + ' $'
    }

      if (select.value === 'euro'){
       let natija =elTitle.textContent=(inputValue/euro).toFixed(2) + ' euro'
    }
      if (select.value === 'somoni'){
       let natija =elTitle.textContent=(inputValue/somoni).toFixed(2) + ' somoni'
    }

      if (select.value === 'rubl'){
       let natija =elTitle.textContent=(inputValue/rubl).toFixed(2) + ' rubl'
    }

      if (select.value === 'lira'){
       let natija =elTitle.textContent=(inputValue/lira).toFixed(2) + ' lira'
    }

    input.value = '' // null


    
})