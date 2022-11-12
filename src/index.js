

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


// --------------------------------------------------------------------

function checkStorage(available, ordered) {
    // Change code below this line
    
  
    if (ordered === 0) {
      return "Your order is empty!";
    } else if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    } 
      return "The order is accepted, our manager will contact you";
    // Change code above this line
  }


 console.log(checkStorage(100, 50)  ) 
 console.log(checkStorage(100, 130))
 console.log(checkStorage(70, 0))
 console.log(checkStorage(200, 20))
 console.log(checkStorage(200, 250))
 console.log(checkStorage(150, 0))
