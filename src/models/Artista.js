import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Album } from "./Album.js";


export const Artista = sequelize.define('artista',{
    id_artista : {
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
    },
    anio_nacimiento : {
        type: DataTypes.DATE,
        allowNull : true
    } 
});

Artista.hasMany(Album,{
    foreignKey : "id_artista",
    sourceKey : "id_artista"
});

Album.belongsTo(Artista,{
    foreignKey : "id_artista",
    target : "id_artista"
})
