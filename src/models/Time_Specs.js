import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion_Specs } from "./Cancion_Specs.js";

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

Time_Specs.hasOne(Cancion_Specs,{
    foreignKey : "id_time_specs",
    sourceKey : "id_time_specs"
})

Cancion_Specs.belongsTo(Time_Specs,{
    foreignKey : "id_time_specs",
    target : "id_time_specs"
})