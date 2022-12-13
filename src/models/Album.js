import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Artista} from "./Artista.js";

export const Album = sequelize.define('album',{
    id_album : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    }
});



