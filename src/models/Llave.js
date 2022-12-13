import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

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