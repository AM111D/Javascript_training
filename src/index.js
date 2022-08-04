

// const SPEDING_THRESHOLD = 200;


// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;

// let bank_balance = 303.91;
// let amount = 0;

// function calculatorTax(amount) {
//    return amount * TAX_RATE;
// }

// function formatAmount(amount) {
//    return amount = '$' + amount.toFixed(2);
// }

// while (bank_balance > amount) {
//     amount = amount + PHONE_PRICE;
//     // console.log(amount)
//     if (amount < SPEDING_THRESHOLD) {
//         amount = amount + ACCESSORY_PRICE;
//     }
// }

// amount = amount + calculatorTax(amount);

// console.log('Ваша покупка' + formatAmount (amount))

// if (amount < bank_balance) {
//     console.log('sorry')
// }



// -------------
let amount = 0;
let = userMoney = prompt('Введи сумму');
userMoney = amount;
console.log(userMoney)
// console.log(userMoney);

const SPEDING_THRESHOLD = 200;


const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

let bank_balance = 303.91;


function calculatorTax(amount) {
   return amount * TAX_RATE;
}

function formatAmount(amount) {
   return amount = '$' + amount.toFixed(2);
}

while (bank_balance > amount) {
    amount = amount + PHONE_PRICE;
    // console.log(amount)
    if (amount < SPEDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
        console.log(amount)
    }
}

amount = amount + calculatorTax(amount);

console.log('Ваша покупка' + formatAmount (amount))

if (amount < bank_balance) {
    console.log('sorry')
}
