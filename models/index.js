require('sequelize');
require('./User');
//Setup database model

const sequelize = require('../config/database').sequelize;

//Import models
const User = require('./User');

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
    syncDatabase
};