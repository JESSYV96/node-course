import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('node-course', 'jessy1', 'root', {
    host: '127.0.0.1',
    dialect: 'postgres'
});

export default sequelize