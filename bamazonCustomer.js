var mysql = require("mysql");
var inquirer = require("inquirer");

// ------------------------------- CONNNECTION
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    user: "root",

    password: "rootroot",

    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    showProducts();
});



// ------------------------------- SHOW PRODUCTS
function showProducts() {
    myQuery = "select * from products"

    connection.query(myQuery, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                i + 1 + ".) " +
                "Product ID: " + res[i].item_id +
                " || Product name: " + res[i].product_name +
                " || Product quantity: " + res[i].stock_quantity
            )
        }
    })
        
    setTimeout( function() {
        requestProduct()
    }, 1000)
}


// ------------------------------- PRODUCT AMOUNT
function requestProduct() {
    inquirer.prompt([
        {
            name: "productID",
            type: "input",
            message: "What is the ID of the product that you would like to buy?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "productAmount",
            type: "input",
            message: "How many products of that kind would you like to buy?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
    ])
    .then(function(obj) {
         console.log(obj)
        /*
        obj = {
            productID: someValue,
            productAmount: someValue
        } */
        productID = obj.productID
        productAmount = obj.productAmount
        // console.log(productID)
        // console.log(productAmount)
        
        var myQuery = "select stock_quantity from products where item_id = ";
        myQuery += productID;

        connection.query(myQuery, function(err, res) {
            console.log(res)

            var productsAvailable = res[0].stock_quantity;
            console.log("Products available: " + productsAvailable)
            

            if (productAmount > productsAvailable) {
                console.log("There isn't enough of that product, pick a smaller size.")
            }
            else {
                console.log("Congrats my brother, you have purchased " + productAmount + " of the item_id: " + productID)

                var productRemaining = productsAvailable - productAmount;
                updateProductQuantity(productID, productRemaining)
            }
        })
    })
}

function updateProductQuantity(productID, productRemaining) {
    myQuery = "select * from products"

    var aQuery = "update products "
    aQuery += "set stock_quantity = 32"
    // aQuery += productRemaining
    aQuery += "where item_id = 9"
    // aQuery += productID;

    connection.query(myQuery, function(err, res) {
        console.log("Inside connection aQuery")
        console.log(res)
        res[0].stock_quantity = 44;
    })

    setTimeout(function () {
        showProducts()
    }, 500)
}


