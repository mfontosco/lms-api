import {config} from 'dotenv'
config()
import { Sequelize } from 'sequelize';


export const sequelizeconnection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});




