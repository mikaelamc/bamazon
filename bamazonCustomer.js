// Display of all items available for sale

// Database recognizes that customer placed order

// Database recognizes how many units of the item is available

// If not available, log Insufficient quantity

// If available, database updates to the new quanity that is available

// App shows user the total cost of the item they'd like to purchase


var mysql = require ("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Luv2code",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
    // run the start function after the connection is made to prompt the user
    start();
});


// First user prompt "What is the the item ID number of the product you would like to purchase"
 function start() {

     console.log(
      "Items For Sale: \n Coffee Mug \n Lancome Mascara \n Nike Hoodie \n  Lounge Chair \n How to Learn Node Js for For Dummies \n Satin Pillowcases \n NBA 2K \n MacBook Pro Laptop \n Christian Loubotin \n I Love Coding T-Shirt");
  
      inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "What is the item ID number of the product you would like to purchase??",
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to"

    })
//     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.userPurchase === choices) {
//         itemSelected();
//       }
//       else {
//         console.log("Are you sure you want to leave this page?");
//       }
//     });
 }

// // Second user prompt "How many units would you like to purchase of this item?"
// function itemSelected() {
//   // prompt for info about the item
//   inquirer
//     .prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "How many units would you like to purchase of this item?"
//       },
//       {
//         name: "category",
//         type: "input",
//         message: "What category would you like to place your auction in?"
//       },
//       {
//         name: "startingBid",
//         type: "input",
//         message: "What would you like your starting bid to be?",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       // when finished prompting, insert a new item into the db with that info
//       connection.query(
//         "INSERT INTO auctions SET ?",
//         {
//           item_name: answer.item,
//           category: answer.category,
//           starting_bid: answer.startingBid,
//           highest_bid: answer.startingBid
//         },
//         function(err) {
//           if (err) throw err;
//           console.log("Your auction was created successfully!");
//           // re-prompt the user for if they want to bid or post
//           start();
//         }
//       );
//     });
// }
