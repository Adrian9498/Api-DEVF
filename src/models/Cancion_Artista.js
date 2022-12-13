import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Cancion_Artista = sequelize.define('cancion_artista',{
    id_cancion_artista : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    }
});

