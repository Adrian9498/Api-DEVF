import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Tonality_Specs} from "../models/Tonality_Specs"

// En este caso para que los id  conincida hay que rellenar la tabla en orden de las llaves musicales

export const Llave = sequelize.define('llave',{
    id_llave : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    nombre :{
        type : DataTypes.STRING,
        allowNull : false
    }
     
});

Llave.hasOne(Tonality_Specs,{
    foreignKey : "id_llave",
    sourceKey : "id_llave"
});

Tonality_Specs.belongsTo(Llave,{
    foreignKey : "id_llave",
    target : "id_llave"
})