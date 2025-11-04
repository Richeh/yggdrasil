const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// define subject parental link model

class SubjectParentalLink extends Model {};

SubjectParentalLink.init({
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    parentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true
        }
    },
    linkType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'biological',
        validate: {
            isIn: [['biological', 'adoptive', 'step', 'guardian', 'foster', 'other']]
        }
    },
    concrete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, { 
    sequelize, 
    modelName: 'SubjectParentalLink',
    tableName: 'subjectParentalLinks',
    timestamps: true 
});

module.exports = SubjectParentalLink;