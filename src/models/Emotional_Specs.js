import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion_Specs } from "./Cancion_Specs.js";


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

Emotional_Specs.hasOne(Cancion_Specs,{
    foreignKey : "id_emotional_specs",
    sourceKey : "id_emotional_specs"
})

Cancion_Specs.belongsTo(Emotional_Specs,{
    foreignKey : "id_emotional_specs",
    target : "id_emotional_specs"
})