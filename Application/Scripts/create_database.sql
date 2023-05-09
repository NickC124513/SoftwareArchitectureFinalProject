-- Table for storing products
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT,
  unit_price DECIMAL(10,2) NOT NULL,
  units_in_stock INT NOT NULL,
  reorder_level INT NOT NULL,
  PRIMARY KEY (product_id)
);