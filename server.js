// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 3000;
// app.use(express.static('public'));


// // Create connection to MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'sqluser', // Replace with your MySQL username
//   password: 'password', // Replace with your MySQL password
//   database: 'myshop', // Replace with your database name
//   port: 3306 // Specify the port here
// });

// // Connect to MySQL database
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to database as id', db.threadId);
// });

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to handle form submission from sell.html
// app.post('/sell', (req, res) => {
//   const { productName, productPrice, productDescription } = req.body;

//   // Insert product details into the database
//   const sql = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
//   db.query(sql, [productName, productPrice, productDescription], (err, result) => {
//     if (err) {
//       console.error('Error inserting product into database:', err);
//       res.status(500).send('Error inserting product into database');
//       return;
//     }
//     console.log('Product added successfully');
//     res.status(200).send('Product added successfully');
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // Serve the sell.html file
// app.get('/sell.html', (req, res) => {
//     res.sendFile(__dirname + '/sell.html');
// });


// Endpoint to handle form submission from sell.html


// Endpoint to handle form submission from sell.html
