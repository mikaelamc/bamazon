// Display of all items available for sale

// Database recognizes that customer placed order

// Database recognizes how many units of the item is available

// If not available, log Insufficient quantity

// If available, database updates to the new quanity that is available

// App shows user the total cost of the item they'd like to purchase


var mysql = require ("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Luv2code",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to the Bamazon Store! Please see our items for sale!");
    // run the start function after the connection is made to prompt the user
    // start();

    ProductList();
});

var ProductList = function() {
	connection.query('SELECT * FROM products', function (error, results) {
	  if (error) throw error;
	  
    var products = results;

    // console.table
    // (results);

    purchaseProducts(products);
	});
};

// Ask user which product to purchase
var purchaseProducts = function(products) {
  inquirer.prompt([{
    name: 'choice',
    type: 'list',
    pageSize: 100,
    message: "What product would you like to purchase?",
    choices: function(value){
      var productsArray =[];
      // loop through products and return array for choices
      for (var index = 0; index < products.length; index++) {
        productsArray.push({
          name:  products[index].product_name +' - $'+ products[index].price,
          value: products[index].item_id,
          short: products[index].product_name
        });
      }
      return productsArray;
    }
  }]).then(function (answers) {

    for (var index = 0; index < products.length; index++) {
      if(products[index].item_id === answers.choice) {

        // Store product purchased obj
        var prodPurchased = products[index];
        
        // Ask User how many to buy
        inquirer.prompt([{
          name: 'choice',
          type: 'input',
          message: "How many would you like to buy?",
          // Validate if value a number
          validate: function(value) { 
            if ( isNaN(value) ) { 
              console.log('\n Please provide a number for the item you/d like to purchase'); 
              return false; 
            } else if( value <= 0 ) {
              console.log('\n To select an item, please provide a number greater than 0'); 
              return false; 
            } else {
              return true;
            }
          },
        }]).then(function (answers) {

          // Store Qty
          var prodQtyPurchased = parseInt(answers.choice);
          var newQty = parseInt(prodPurchased.stock_quantity) - parseInt(prodQtyPurchased);
          var totalSale = prodPurchased.price * parseInt(prodQtyPurchased);
          var currentSales = prodPurchased.product_sales + totalSale;

          // Check if there's enough in stock \
        console.log(prodPurchased.stock_quantity, prodQtyPurchased);
        console.log(prodPurchased.stock_quantity >= prodQtyPurchased);
          if(prodPurchased.stock_quantity >= prodQtyPurchased) {
            // Update quantity purchased in DB
            // var query = connection.query(
            //   "UPDATE products SET ? WHERE ?",
            //   [
            //     {
            //       stock_quantity: newQty,
            //       product_sales: currentSales
            //     },
            //     {
            //       item_id: prodPurchased.item_id
            //     }
            //   ],
            //   function(err, res) {
            //     if(err) throw err;
            //     // console.log(res.affectedRows + " product updated!\n");
            //   }
            // );
            // connection.query(
            //     "SELECT products.product_name, products.stock_quantity WHERE item_id = ?",
            //         [
            //     {
            //         item_id: prodPurchased.item_id
            //     }
            // ],
            
            //     function(err, res) {
            //       if(err) throw err;
            //       console.log(err);
            //        console.table(res);
            //     }
            //   );
    //   Get a working sql statement manually 
    // documentation 


            // logs the actual query being run
            // console.log(query.sql);
            console.log('\nTotal Cost: $' +  totalSale + '\n');
            ProductList();

          } else {
            console.log('\nSorry Insufficient quantity!\n');
            ProductList();
          }

        

          

        });
      }
    }

  });


}








// First user prompt "What is the the item ID number of the product you would like to purchase"
//  function start() {

//      console.log(
//       "Items For Sale: \n Coffee Mug \n Lancome Mascara \n Nike Hoodie \n  Lounge Chair \n How to Learn Node Js for For Dummies \n Satin Pillowcases \n NBA 2K \n MacBook Pro Laptop \n Christian Loubotin \n I Love Coding T-Shirt");
  
//       inquirer
//     .prompt({
//       name: "item_id",
//       type: "input",
//       message: "What is the item ID number of the product you would like to purchase??",
//     },
//     {
//       name: "quantity",
//       type: "input",
//       message: "How many would you like to"

//     })
// //     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.userPurchase === choices) {
//         itemSelected();
//       }
//       else {
//         console.log("Are you sure you want to leave this page?");
//       }
// //     });
//  }

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
//  }
