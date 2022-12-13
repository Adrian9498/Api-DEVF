import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Cancion = sequelize.define('cancion',{
    id_cancion : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    },
    popularidad : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});