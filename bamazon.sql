
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
UPDATE products
SET stock_quantity = 2
WHERE product_id = 4;


-- ---------------------------- 
select * from products


-- ---------------------------- 
-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT title, firstName, lastName
FROM books
    INNER JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT title, firstName, lastName
FROM books
    LEFT JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT title, firstName, lastName
FROM books
    RIGHT JOIN authors ON books.authorId = authors.id;