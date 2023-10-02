import { Sequelize } from 'sequelize';

export const sequelizeconnection = new Sequelize('lms-utidia', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});


