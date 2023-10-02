import { Sequelize } from 'sequelize';

export const sequelizeconnection = new Sequelize('lms-utidia', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, 
  dialect: 'postgres',
  logging: false,
});


