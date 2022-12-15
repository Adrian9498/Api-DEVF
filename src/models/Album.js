import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Cancion } from "./Cancion.js";

export const Album = sequelize.define('albums',{
    id_album : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    tableName: 'albums'
});

Album.hasMany(Cancion,{
    foreignKey : "id_album",
    sourceKey : "id_album"
})

Cancion.belongsTo(Album,{
    foreignKey : "id_album",
    target : "id_album"
})



