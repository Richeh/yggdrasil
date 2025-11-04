const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// define subject model

class Subject extends Model {};

Subject.init({
    forenames: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true
        }
    },
    birthplace: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    deathdate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true
        }
    }
}, { 
    sequelize, 
    modelName: 'Subject',
    tableName: 'subjects',
    timestamps: true 
});

module.exports = Subject;