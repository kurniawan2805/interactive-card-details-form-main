let cardNumber = document.getElementById("card-number");
let numberValue = document.getElementById("number")

numberValue.addEventListener('input', updateNumber);

function updateNumber(e){
    e.target.value = e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    cardNumber.innerHTML=e.target.value;
}

let nameValue = document.getElementById("name");
let cardName = document.getElementById("card-name");

nameValue.oninput = e => {
    cardName.innerText = e.target.value;
}

let monthValue = document.getElementById("month");
let cardMonth= document.getElementById("card-month");

monthValue.oninput = e => {
    cardMonth.innerText = e.target.value;
}

let yearValue = document.getElementById("year");
let cardYear= document.getElementById("card-year");

yearValue.oninput = e => {
    cardYear.innerText = e.target.value;
}

let cvcValue = document.getElementById("cvc");
let cardcvc= document.getElementById("card-cvc")

cvcValue.oninput = e => {
    cardcvc.innerText = e.target.value;
}

let submit_button =document.getElementById("submit");

submit_button.onclick = e => {
    checkName();
    checkNumber();
    checkDate();
    checkCVC();
}

function checkName(){
    let name_val =document.getElementById("name_valid");

    if(!nameValue.value){
        name_val.classList.remove("hidden");
    } else {
        name_val.classList.add("hidden");
    }
}


function checkDate(){
    let date_val =document.getElementById("date_valid");

    if(!monthValue.value || !yearValue.value){
        date_val.classList.remove("hidden");
    } else {
        date_val.classList.add("hidden");
    }
}

function checkCVC(){
    let cvc_val =document.getElementById("cvc_valid");

    if(!cvcValue.value){
        cvc_val.classList.remove("hidden");
    } else {
        cvc_val.classList.add("hidden");
    }
}

function checkNumber(){
    let cardNumber_fix = cardNumber.innerHTML.replace(/\s/g, '');
    let isNumber = /^\d+$/.test(cardNumber_fix);

    let num_val = document.getElementById("number_valid");
    if(!isNumber || !numberValue.value){
        // console.log("False")
        num_val.classList.remove("hidden")
        // console.log(num_val)
    } else {
        num_val.classList.add("hidden")
    }
}


// numberValue.oninput = e => {
//     e.target.value = patternMatch({
//     input: e.target.value,
//     template: "xxxx xxxx xxxx xxxx",
//   });
// }

// function patternMatch({ input, template }) {
//   try {
//     let j = 0;
//     let plaintext = "";
//     let countj = 0;
//     while (j < template.length) {
//       if (countj > input.length - 1) {
//         template = template.substring(0, j);
//         break;
//       }

//       if (template[j] == input[j]) {
//         j++;
//         countj++;
//         continue;
//       }

//       if (template[j] == "x") {
//         template =
//           template.substring(0, j) + input[countj] + template.substring(j + 1);
//         plaintext = plaintext + input[countj];
//         countj++;
//       }
//       j++;
//     }

//     return template;
//   } catch {
//     return "";
//   }
// }