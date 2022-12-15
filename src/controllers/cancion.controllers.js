import { Cancion } from "../models/Cancion.js"
import {Cancion_Specs} from "../models/Cancion_Specs.js";
import {Emotional_Specs} from "../models/Emotional_Specs.js";
import { Op } from "sequelize"
import { Album } from "../models/Album.js";

export const getCancion = async (req,res) => {
    try{
        const response = await Cancion.findAll(
            {   
                attributes: ['nombre','popularidad'], 
                include:  [
                    {
                        model: Cancion_Specs,
                        attributes: ['id_cancion_specs'], 
                        include:{
                            model: Emotional_Specs,
                            attributes: ['bailabilidad','energia','valencia'], 
                        }
                    }
                ]

            }
        );
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const getCancionesMasPopulares = async (req,res) => {
    try{
        const response = await Cancion.findAll(
            {   
                attributes: ['id_cancion','nombre','popularidad'], 
                where: {
                    popularidad:{[Op.gt]:80},
                }
            }
        );
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const getCancionesMenosPopulares = async (req,res) => {
    try{
        const response = await Cancion.findAll(
            {   
                attributes: ['id_cancion','nombre','popularidad'], 
                where: {
                    popularidad:{[Op.lt]:30},
                }
            }
        );
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}