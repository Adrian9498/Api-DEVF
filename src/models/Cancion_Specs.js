import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion } from "./Cancion.js";

export const Cancion_Specs = sequelize.define('cancion_specs',{
    id_cancion_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    }
});

Cancion_Specs.hasOne(Cancion,{
    foreignKey : "id_cancion_specs",
    sourceKey : "id_cancion_specs"
});

Cancion.belongsTo(Cancion_Specs,{
    foreignKey : "id_cancion_specs",
    target : "id_cancion_specs"
})

