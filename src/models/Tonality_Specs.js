import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Modo } from "./Modo.js";
import { Llave } from "./Llave.js";

export const Time_Specs = sequelize.define('time_specs',{
    id_tonality_specs : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true
    }
});

