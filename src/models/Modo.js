import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Tonality_Specs} from "../models/Tonality_Specs"

//Con esta tabla modo pasa a menor en 1 y major en 2

export const Modo = sequelize.define('modo',{
    id_modo : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    }
     
});

Modo.hasOne(Tonality_Specs,{
    foreignKey : "id_modo",
    sourceKey : "id_modo"
});

Tonality_Specs.belongsTo(Modo,{
    foreignKey : "id_modo",
    target : "id_modo"
})