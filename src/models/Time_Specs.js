import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";


export const Time_Specs = sequelize.define('time_specs',{
    id_time_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    tempo :{
        type : DataTypes.FLOAT,
        allowNull : false
    },
    signatura : {
        type : DataTypes.CHAR,
        allowNull : false
    },
    duracion : {
        type: DataTypes.INTEGER,
        allowNull : false
    } 
    
});