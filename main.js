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
    // e.target.value = pad(e.target.value,2);
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



let myForm = document.getElementById("myForm");
let myModal = document.getElementById("myModal")

myForm.onsubmit = e => {
    let formCheck = (checkCVC() && checkDate() && checkName && checkNumber())
    e.preventDefault();
    if(myForm.checkValidity() && formCheck){
        myModal.classList.remove("overflow");
        myModal.classList.add("active");
    }
    
}

let modal_button = document.getElementById("modal-btn");

modal_button.onclick = e => {
    myModal.classList.remove("active");
    myModal.classList.add("overflow");
}


function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function checkName(){
    let name_val =document.getElementById("name_valid");

    if(!nameValue.value){
        name_val.classList.remove("hidden");
        nameValue.focus();
        return false;
    } else {
        name_val.classList.add("hidden");
        return true;
    }
}


function checkDate(){
    let date_val =document.getElementById("date_valid");

    if(!monthValue.value){
        date_val.classList.remove("hidden");
        monthValue.focus();
        return false;
    } if(!yearValue.value){
        date_val.classList.remove("hidden");
        yearValue.focus();
        return false;
    } 
        date_val.classList.add("hidden");
        return true;
    
}

function checkCVC(){
    let cvc_val =document.getElementById("cvc_valid");

    if(!cvcValue.value || cvcValue.value.length !== 3){
        cvc_val.classList.remove("hidden");
        cvcValue.focus();
        return false;
    } else {
        cvc_val.classList.add("hidden");
        return true;
    }
}

function checkNumber(){
    let cardNumber_fix = cardNumber.innerHTML.replace(/\s/g, '');
    let isNumber = /^\d+$/.test(cardNumber_fix);

    let num_val = document.getElementById("number_valid");
    if(!isNumber || cardNumber_fix.length < 16){
        // console.log("False")
        num_val.classList.remove("hidden");
        numberValue.focus();
        return false;
        // console.log(num_val)
    } else {
        num_val.classList.add("hidden");
        return true;
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