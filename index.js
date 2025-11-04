require('dotenv').config();

const express=require('express');
const bodyParser=require('body-parser');

const { sequelize, User, syncDatabase } = require('./models');

syncDatabase();

const app=express();
const port=process.env.PORT || 3000;

// Middleware for parsing request body

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/api', userRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
