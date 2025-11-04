const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// define subject model

class SubjectFact extends Model {};

SubjectFact.init({
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    concrete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, { 
    sequelize, 
    modelName: 'SubjectFact',
    tableName: 'subjectFacts',
    timestamps: true 
});

module.exports = SubjectFact;