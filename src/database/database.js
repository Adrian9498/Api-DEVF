import  Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config({path:'src/.env'})

export const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect : 'postgres' 
    }
);