const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// define subject model

class Subject extends Model {};

Subject.init({
    forenames: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    birthplace: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deathdate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { 
    sequelize, 
    modelName: 'Subject',
    tableName: 'subjects',
    timestamps: true 
});

module.exports = Subject;