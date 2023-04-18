-- Table for storing products
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT,
  unit_price DECIMAL(10,2) NOT NULL,
  units_in_stock INT NOT NULL,
  reorder_level INT NOT NULL,
  supplier_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Table for storing suppliers
CREATE TABLE suppliers (
  supplier_id INT NOT NULL AUTO_INCREMENT,
  supplier_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_title VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(255) NOT NULL,
  region VARCHAR(255),
  postal_code VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  fax VARCHAR(255) NOT NULL,
  homepage TEXT,
  PRIMARY KEY (supplier_id)
);

-- Table for storing categories
CREATE TABLE categories (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  category_description TEXT,
  PRIMARY KEY (category_id)
);

-- Table for storing orders
CREATE TABLE orders (
  order_id INT NOT NULL AUTO_INCREMENT,
  order_date DATETIME NOT NULL,
  required_date DATETIME NOT NULL,
  shipped_date DATETIME,
  customer_id INT NOT NULL,
  shipper_id INT NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (shipper_id) REFERENCES shippers(shipper_id)
);

-- Table for storing customers
CREATE TABLE customers (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  contact_title VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(255) NOT NULL,
  region VARCHAR(255),
  postal_code VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  fax VARCHAR(255) NOT NULL,
  PRIMARY KEY (customer_id)
);

-- Table for storing shippers
CREATE TABLE shippers (
  shipper_id INT NOT NULL AUTO_INCREMENT,
  shipper_name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  PRIMARY KEY (shipper_id)
);

-- Table for storing order details
CREATE TABLE order_details (
  order_detail_id INT NOT NULL AUTO_INCREMENT,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  discount DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (order_detail_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
