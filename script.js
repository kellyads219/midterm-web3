let inputMaxVal = document.querySelector("#input-maxval");
let inputYear = document.querySelector("#input-year");
let inputMake = document.querySelector("#input-make");
let inputModel = document.querySelector("#input-model");
let inputPrice = document.querySelector("#input-price");
let selectColor = document.querySelector("#select-color");

let cardContainer = document.querySelector(".container-cards");
let newCard = ``;
let headingForSale = document.querySelector(".heading-for-sale");

let btnMaxVal = document.querySelector(".btn-maxval-set");
let btnShowAll = document.querySelector(".btn-showall");
let btnAddCar = document.querySelector(".btn-add-car");

let carsArray = [];

function clearInput() {
    if (inputMaxVal.value != "") {
        inputMaxVal.value = "";
    }
    if (inputYear.value != "") {
        inputYear.value = "";
    }
    if (inputMake.value != "") {
        inputMake.value = "";
    }
    if (inputModel.value != "") {
        inputModel.value = "";
    }
    if (inputPrice.value != "") {
        inputPrice.value = "";
    }
}

function addCar(){
    let newCar = {
        year: inputYear.value,
        make: inputMake.value,
        model: inputModel.value,
        price: inputPrice.value,
        color: selectColor.value
    }
    carsArray.push(newCar);
    carsArray.forEach(function(carInfo) {
        newCard = `
            <div class="card">
                <h3 class="card-make-model">${carInfo.make} ${carInfo.model}</h3>
                <p class="card-year">${carInfo.year}</p>
                <p class="card-price">$${carInfo.price}</p>
                <div class="card-color" style="background-color:${carInfo.color};"></div>
            </div>
            `;
    });
    cardContainer.innerHTML += `${newCard}`;
    clearInput();
}

btnAddCar.addEventListener("click", () => {
    addCar();
});

btnMaxVal.addEventListener('click', () => {
    let cardChildren = cardContainer.children;
    for (let i=0; i<cardChildren.length; i++) {
        let cardChild = cardChildren[i];
        let cardGChild = cardChild.children;
        let childPrice = cardGChild[2];
        let cardPrice = childPrice.outerText.replace(/\$/g,'');
        if (parseFloat(cardPrice) > inputMaxVal.value) {
            cardChild.style.display = "none";
        } else {
            cardChild.style.display = "grid";
        }
    }   
    headingForSale.textContent = `Cars for Sale - Under $${inputMaxVal.value}`;
    clearInput();    
})

btnShowAll.addEventListener('click', () => {
    let cardChildren = cardContainer.children;
    for (let i=0; i<cardChildren.length; i++) {
        let cardChild = cardChildren[i];
        cardChild.style.display = "grid";
    }
})
