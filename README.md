# Inventory Management App

This is a simple inventory management app built with React, Node.js, MySQL, and Express.js.

## Getting Started

### Setting up MySQL Community for the Inventory Manager App

#### Downloading and Installing MySQL Community
Go to the MySQL Community Downloads page.

Scroll down to the "MySQL Community Server" section and click on the "Download" button for the appropriate version of MySQL Community Server for your operating system.

On the next page, you will be prompted to log in or sign up for an Oracle account. Scroll down to the "No thanks, just start my download" button and click on it.

Once the download is complete, run the installation program.

In the setup wizard, select "Developer Default" as the setup type and click "Next".

Accept the default options on the following screens and click "Next" until you reach the "Authentication Method" screen.

On the "Authentication Method" screen, select "Use Strong Password Encryption (RECOMMENDED)" and set a password for the root user account. Make sure to remember this password as you will need it later.

Continue through the remaining screens, accepting the default options until the installation is complete.

#### Creating a New User, and setting up the tables
Open the MySQL Command Line Client by searching for "MySQL Shell" on your pc, then running it. Alternatively, you could open the MySQL Shell by typing mysqlsh in your command prompt or terminal.

Type "\sql" to change out of JS mode and into SQL mode.

Enter the following command: "\connect root@localhost". This will connect you to the root account you made during setup. 

Enter your root user password when prompted.

Run the following command to create a new user with the username "inventory-manager" and the password "admin123":
```CREATE USER 'inventory-manager'@'localhost' IDENTIFIED BY 'admin123';```

Create a database called "inventory" ```CREATE DATABASE inventory;```

Grant the new user all privileges on the inventory database by running the following command:
```GRANT ALL PRIVILEGES ON inventory.* TO 'inventory-manager'@'localhost';```

Select the inventory database by running the following command:
```USE inventory;```

Run the following commands to create and populate the products and users tables(All of the commands can be found in "create_database.sql" in the Scripts folder of the project):
```
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  units_in_stock INT NOT NULL,
  PRIMARY KEY (product_id)
);
```
```
INSERT INTO products (product_name, unit_price, units_in_stock)
VALUES
  ('Acrylic Paint Set', 25, 50),
  ('Watercolor Paint Set', 32, 75),
  ('Oil Paint Set', 18, 30),
  ('Canvas Panel Pack', 28, 100),
  ('Sketchbook', 12, 150);
 ```
 ```
 CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```
```
INSERT INTO users (username, password) VALUES
  ('art-store-manager', 'art-is-neat'),
  ('nick', 'passwordNC'),
  ('nicole', 'passwordNL'),
  ('matt', 'passwordML'),
  ('will', 'passwordWB'),
  ('taylor', 'passwordTR');
```
MySql should now be set up, and ready for use with the inventory manager app!

### App Installation

To install this app, follow these steps:

1. Clone this repository using Git:
git clone https://github.com/your-username/inventory-management-app.git

2. Install the dependencies for both the client and server:
```cd inventory-management-app```
```cd client && npm install```
```cd ../server && npm install```

If you set up your MySQL with the correct values, no changes should be needed within the application.

### Usage

#### Running the App
To start the server and client, run the following commands in separate terminal windows:
```cd inventory-management-app/server && node server.js```
```cd inventory-management-app/client && npm start```

The client will run on `http://localhost:3000` and the server will run on `http://localhost:5000`.

#### Logging In
When the application runs, you will be presented with a login screen. You can enter any of the values that were set up during the MySql setup,
but it is recommended that you enter the following:
```Username: 'art-store-manager'```
```Password: 'art-is-neat'```

## Directory Structure

- `client/` - Contains the React client code.
- `server/` - Contains the Node.js server code.
- `inventory.sql` - Contains the SQL code to create the MySQL database schema.
- `README.md` - This file.



