-- Table for storing products
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  units_in_stock INT NOT NULL,
  PRIMARY KEY (product_id)
);

--Populate products table with sample art data
INSERT INTO products (product_name, unit_price, units_in_stock)
VALUES
  ('Acrylic Paint Set', 25, 50),
  ('Watercolor Paint Set', 32, 75),
  ('Oil Paint Set', 18, 30),
  ('Canvas Panel Pack', 28, 100),
  ('Sketchbook', 12, 150);


--Table for storing users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

--Populate user table with dummy data
INSERT INTO users (username, password) VALUES
  ('nick', 'passwordNC'),
  ('nicole', 'passwordNL'),
  ('Matt', 'passwordML'),
  ('will', 'I-Rush-A-When-I-Am-Supposed-To-Rush-B'),
  ('taylor', 'Backend-Is-Best');
