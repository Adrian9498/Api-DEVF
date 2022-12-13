import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

//Con esta tabla modo pasa a menor en 1 y major en 2

export const Modo = sequelize.define('modo',{
    id_modo : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    }
     
});