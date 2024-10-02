
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollar) {
    let yen = Math.round(dollar * (oneEuroIs.JPY/oneEuroIs.USD));
    return yen;
}

function fromEuroToDollar (euro) {
    let dollar = Math.round(euro * oneEuroIs.USD);
    return dollar;
}

function fromYenToPound (yen) {
    let pound = Math.round(yen * (oneEuroIs.GBP/oneEuroIs.JPY));
    return pound;
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, }
