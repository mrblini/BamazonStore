var mysql = require("mysql");
var inquirer = require("inquirer");

// ------------------------------- CONNNECTION
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


// ------------------------------- PRODUCT AMOUNT
function productAmountSearch() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "productID",
                message: "What is the ID of the product that you would like to buy?"
            },
            {
                type: "input",
                name: "productAmount",
                message: "What is the ID of the product that you would like to buy?"
            }
        ])
        .then(function (obj) {
            /*
            obj = {
                productID: someValue,
                productAmount: someValue
            }
            */
           productID = obj.productID
           productAmount = obj.productAmount
        
            var myQuery = "select stock_quantity from products where item_id ="

            connection.query(myQuery + productID, function(err, res) {
                var productsAvailable = 
                    if (productAmount > productsAvailable) {
                        console.log("There isn't enough of that product, pick smaller size.")
                    }
                    else {

                    }

                }
            })

            

            var query = "SELECT item_id, stock_quantity";
            query += "FROM products WHERE item_id = " + productID;

            connection.query(query, [answer.artist, answer.artist], function (err, res) {
                console.log(res.length + " matches found!");
                for (var i = 0; i < res.length; i++) {
                    console.log(
                        i + 1 + ".) " +
                        "Year: " +
                        res[i].year +
                        " Album Position: " +
                        res[i].position +
                        " || Artist: " +
                        res[i].artist +
                        " || Song: " +
                        res[i].song +
                        " || Album: " +
                        res[i].album
                    );
                }

                runSearch();
            });
        });
}

productAmountSearch()


// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     readColleges();
// });

// function readColleges() {
//     connection.query("SELECT name FROM colleges", function (err, res) {
//         if (err) throw err;

//         // Log all results of the SELECT statement
//         console.log(res);
//         connection.end();
//     });
