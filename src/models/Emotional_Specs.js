import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";


export const Emotional_Specs = sequelize.define('emotional_specs',{
    id_emotional_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    bailabilidad :{
        type : DataTypes.FLOAT,
        allowNull : false
    },
    energia : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    valencia : {
        type: DataTypes.FLOAT,
        allowNull : false
    } 
});