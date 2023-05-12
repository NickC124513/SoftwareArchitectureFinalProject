-- Table for storing products
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT,
  unit_price DECIMAL(10,2) NOT NULL,
  units_in_stock INT NOT NULL,
  PRIMARY KEY (product_id)
);

--Populate products table with sample art data
INSERT INTO products (product_name, product_description, unit_price, units_in_stock)
VALUES
  ('Acrylic Paint Set', 'A set of 12 acrylic paint tubes', 24.99, 50),
  ('Watercolor Paint Set', 'A set of 24 watercolor paint pans', 32.50, 75),
  ('Oil Paint Set', 'A set of 6 oil paint tubes', 17.99, 30),
  ('Canvas Panel Pack', 'A pack of 12 canvas panels', 28.99, 100),
  ('Sketchbook', 'A 100-page sketchbook', 12.50, 150);


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
