const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    }
}, {
        indexes: [
            {
                unique: true,
                fields: ['nombre', 'apellido']
            }
        ]
    
});

module.exports = User;