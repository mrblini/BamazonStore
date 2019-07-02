
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

-- ---------------------------- 

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("socks", "clothes", 12, 4);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("boxers", "clothes", 40, 4);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("shoes", "clothes", 150, 4);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("jacket", "clothes", 480, 4);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("hoodie", "clothes", 18, 4);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("shirt", "clothes", 22, 2);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("suit", "clothes", 9200, 1);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("tie", "clothes", 99, 3);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("hat", "clothes", 38, 2);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("glasses", "clothes", 280, 1);


-- ---------------------------- 
select * from products