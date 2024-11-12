import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configura Sequelize usando DATABASE_URL para entornos en Heroku
const databaseUrl = process.env.DATABASE_URL || 
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DATABASE_URL ? { require: true, rejectUnauthorized: false } : false
  }
});

export default sequelize;
