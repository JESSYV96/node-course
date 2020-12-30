import { Sequelize } from 'sequelize';
import sequelize from '../utils/db.js'

const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
})

export default Product