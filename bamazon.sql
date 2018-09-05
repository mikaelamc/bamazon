CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (10),
department_name VARCHAR (10),
price DECIMAL (10),
stock_quantity INTEGER (10)

);

-- Insertion of Values --
INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Coffee Mug", "Kitchen", 4.99, 25);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Lancome Mascara", "Cosmetics", 27.50, 80);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Nike Hoodie", "Clothing", 30.00, 100);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Chaise Lounge", "Furniture", 125.00, 10);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "How to Learn Node Js For Dummies", "Books", 15.03, 15);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Satin Pillowcases", "Bedding", 2.99, 20);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Madden", "Gaming", 49.99, 10);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "MAC Laptop", "Electronics", 110.00, 5);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Christian Loubotin", "Shoes", 400.00, 2);

INSERT INTO bamazon (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "I Love Coding T-Shirt", "Clothing", 10.00, 20);

SELECT * FROM bamazon;