import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion_Artista } from "./Cancion_Artista.js";

export const Cancion = sequelize.define('cancion',{
    id_cancion : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    },
    popularidad : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    tableName: 'cancion'
});

Cancion.hasMany(Cancion_Artista,{
    foreignKey : "id_cancion",
    sourceKey : "id_cancion"
})

Cancion_Artista.belongsTo(Cancion,{
    foreignKey : "id_cancion",
    target : "id_cancion"
})
