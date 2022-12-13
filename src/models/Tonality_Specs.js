import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion_Specs } from "./Cancion_Specs.js";

export const Tonality_Specs = sequelize.define('tonality_specs',{
    id_tonality_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    }
});

Tonality_Specs.hasOne(Cancion_Specs,{
    foreignKey : "id_tonality_specs",
    sourceKey : "id_tonality_specs"
})

Cancion_Specs.belongsTo(Tonality_Specs,{
    foreignKey : "id_tonality_specs",
    target : "id_tonality_specs"
})
