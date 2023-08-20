// Assignment # 01  Begins 

// const print = document.querySelector("#print");
// print.onclick = function (){
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;


//     console.log("Name: " + name);
//     console.log("Email: " + email);
// }

// Assignment # 01  End

// Assignment 03 Begins

const monthSelector = document.querySelector("#months");
const climateResult = document.querySelector("#climateChange");

monthSelector.onchange = function(){
    const selectedMonth = parseInt(monthSelector.value);

    let climate = "";

    switch(selectedMonth){
        case 11:
        case 12:
        case 1:
            climate = "Cold";
            break;
        case 5:
        case 6:
        case 7:
            climate = "Hot";
            break;
        case 2:
        case 3:
        case 4:
        case 8:
        case 9:
        case 10:
            climate = "Moderate";
            break;
        default:
            climate = "Invalid Month";
    }
    climateResult.textContent = `The Climate for the month of ${selectedMonth} is ${climate}`;

}