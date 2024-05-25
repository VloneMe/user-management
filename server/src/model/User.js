const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {};

User.init({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User