// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.


function question1 () {
  let priceTotal = 0
  for (let i = 0; i < data.length; i++) {
    priceTotal += data[i].price;
    // cumulatively adds prices while going through 'data'
  }
  let avgPrice = (priceTotal / data.length).toFixed(2);
  // takes the price total (priceTotal), and divides it by the number of items (data.length) and rounds it to two decimal places (since we are dealing with money)
  console.log(`The average price is $${avgPrice}`);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
let itemArray = [];

function question2 () {
  for (let i = 0; i < data.length; i++) {
    if (14 <= data[i].price && data[i].price <= 18) {
      // setting condition to find prices that are between $14 and $18
      itemArray.push(data[i].title);
      // sends items that fulfilled above condition and pushes it to my array (itemArray)
    }
  }
  console.log(itemArray);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.

// METHOD WITH WHILE

function question3() {
  let x = 0;
  while (x < data.length) {
    if (data[x].currency_code === "GBP") {
      console.log(data[x].title, data[x].price + " pounds");
    }
  x++
  }
}

// METHOD WITH FOR

// function question3 () {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].currency_code === "GBP") {
//       // searches data for any item with currecy_code that is GBP
//       console.log(data[i].title, data[i].price);
//     }
//   }
// }


// 4: Display a list of all items who are made of wood.
function question4 () {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes("wood")) {
      // searches data for any items that have materials that include wood
      console.log(data[i].title);
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.

function question5 () {
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      // measures the length of each item's materials and if it is 8 or more
      console.log(data[i].title, data[i].materials.length, data[i].materials);
    }
  }
}


// 6: How many items were made by their sellers?

// METHOD ONE

// function question6 () {
//   let iMadeItems = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].who_made === "i_did") {
//       // searches data and matches any instance of "i_did" in the "who_made"
//       iMadeItems.push(data[i]);
//       // any that fulfill that condition are pushed to my array iMadeItems
//     }
//   }
//   console.log(iMadeItems.length);
//   // measures the length of my array which is equivalent to the #of itemx that have "i_did" in data
// }

// METHOD TWO

function question6() {
  let howMany = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      howMany += 1
      // increases the value of howMany everytime a match with "i_did" is made
    }
  }
  console.log(`${howMany} items were made by their seller.`);
}
