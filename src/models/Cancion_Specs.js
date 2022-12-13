import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Cancion_Specs = sequelize.define('cancion_specs',{
    id_cancion_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    }
});

