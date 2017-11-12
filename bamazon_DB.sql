DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("turkey", "main", 20, 84);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("stuffing", "side", 6, 53);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mashed potatoes", "side", 5, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cranberry sauce", "side", 4, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("brussel sprouts", "side", 5, 46);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("salad", "side", 41, 84);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pumpkin pie", "dessert", 5, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ice cream", "dessert", 4, 62);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cider", "drink", 7, 87);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wine", "drink", 8, 73);
