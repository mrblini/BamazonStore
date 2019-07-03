# BamazonStore
The new Amazon.


### This CLI web app is an Amazon-like store that will take in orders from customers and deplete stock from the store's inventory. The app will also track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.


# Images:

* 

# --------------------------------------------- ADDITIONAL INFO:
1. MySQL Database: `bamazon`.

2. Table: `products`.

3. Table columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Database table has 10 different products.

5. Use the Node application called `bamazonCustomer.js` to run the program. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, the application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.