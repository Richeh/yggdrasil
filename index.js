const express=require('express');
const bodyParser=require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app=express();
const port=3000;


// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/api', userRoutes);

// Middleware for parsing request body

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
