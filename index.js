require('dotenv').config();

const express=require('express');
const bodyParser=require('body-parser');

const { sequelize, User, Subject, syncDatabase } = require('./models');

syncDatabase();

const app=express();
const port=process.env.PORT || 3000;

// Middleware for parsing request body

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/users');
const subjectRoutes = require('./routes/subjects');

// Use routes
app.use('/api', userRoutes);
app.use('/api', subjectRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
