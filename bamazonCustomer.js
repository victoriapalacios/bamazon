var mysql = require('mysql');
var inquirer = require('inquirer');

// Below is how we connect to the mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

function readProducts() {
  console.log("THANKSGIVING FOODS AVAILABLE\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    //console.log(res);

    // Below is how we display the thanksgiving table in the console
    var table = '';
    for (var i = 0; i < res.length; i++) {
      table = '';
      table += 'Item ID: ' + res[i].id + '  ||  ';
      table += 'Product Name: ' + res[i].product_name + '  ||  ';
      table += 'Department: ' + res[i].department_name + '  ||  ';
      table += 'Price: $' + res[i].price + '  ||  ';
      table += 'Quantity: ' + res[i].stock_quantity + '\n';

      console.log(table);
    }
  });
}

// Below function is how we capture what the user wants to buy and how much
function userPrompt() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'item',
      message: 'Which item would you like to purchase? Please enter item ID.',
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'Please enter the quantity you would like to purchase.',
    }
  ])

  // once we capture that info, we check to see if inventory is avaialble. if yes, we subtract it from the inventory.
  .then(function(input) {
    var item = input.item;
    var quantity = input.quantity;

    // query database to make sure item is in stock
    var checkTable = 'SELECT * FROM products WHERE ?';

    connection.query(checkTable, {id: item}, function(err, data) {
      if (err) throw err;

        var productData = data[0];

        // If the quantity requested by the user is in stock
        if (quantity <= productData.stock_quantity) {
          console.log('The product you requested is available! Placing order.');

          // Updating product amount to reflect subtraction
          var updateTable = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE id = ' + item;

          connection.query(updateTable, function(err, data) {
            if (err) throw err;

            console.log("Your total is $" + productData.price * quantity + ". Thank you for your order!");
          })
        }

        else {
          console.log("There is not enough product in stock, please modify your order.");
        }

        // Below is how we first display the table to the user
        readProducts()
        // Below is how we end the connection to the server once we have retrieved all the data
        connection.end();
    })


  });
};


// below is where call function that displays table
readProducts()

// below is where we call function that asks user questions
userPrompt()
