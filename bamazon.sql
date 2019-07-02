
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;


-- ---------------------------- 
CREATE TABLE products
(
    item_id int
    auto_increment not null,
	product_name varchar
    (25) null,
	department_name varchar
    (20) null,
	price int null,
	stock_quantity int null,
    primary key
    (item_id)
);