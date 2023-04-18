# Inventory Management App

This is a simple inventory management app built with React, Node.js, MySQL, and Express.js.

## Getting Started

### Prerequisites

Before you can run this app, you need to have the following software installed on your computer:

- Node.js
- MySQL
- Git

### Installation

To install this app, follow these steps:

1. Clone this repository using Git:
git clone https://github.com/your-username/inventory-management-app.git

2. Install the dependencies for both the client and server:
cd inventory-management-app
cd client && npm install
cd ../server && npm install


3. Create a MySQL database and import the `inventory.sql` file:
mysql -u your-username -p your-database-name < inventory.sql


4. Set the environment variables in the `server/.env` file:
DB_HOST=localhost
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name

Replace the values with your own database credentials.

### Usage

To start the server and client, run the following commands in separate terminal windows:
cd inventory-management-app/server && npm start
cd inventory-management-app/client && npm start

The client will run on `http://localhost:3000` and the server will run on `http://localhost:5000`.

## Directory Structure

This is the directory structure of the app:
inventory-management-app/
├── client/

│ ├── node_modules/

│ ├── public/

│ ├── src/

│ ├── package.json

│ ├── package-lock.json

│ └── README.md

├── server/

│ ├── config/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── utils/

│ ├── .env

│ ├── package.json

│ ├── package-lock.json

│ └── README.md

├── inventory.sql

└── README.md

- `client/` - Contains the React client code.
- `server/` - Contains the Node.js server code.
- `inventory.sql` - Contains the SQL code to create the MySQL database schema.
- `README.md` - This file.



