require('sequelize');
require('./User');
require('./Subject');
require('./SubjectParentalLink');
require('./SubjectFact');

//Setup database model

const sequelize = require('../config/database').sequelize;

//Import models
const User = require('./User');
const Subject = require('./Subject');
const SubjectParentalLink = require('./SubjectParentalLink');
const SubjectFact = require('./SubjectFact');

//Devine associations between models
// (if any, e.g., User.hasMany(Post))

// Sync models with database

async function syncDatabase() {
    try {
        await sequelize.sync({ force: false });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}

module.exports = {
    sequelize,
    User,
    Subject,
    SubjectParentalLink,
    SubjectFact,
    syncDatabase
};