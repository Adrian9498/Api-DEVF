import { Cancion } from "../models/Cancion.js"
import {Cancion_Specs} from "../models/Cancion_Specs.js";
import {Emotional_Specs} from "../models/Emotional_Specs.js";
import {Tonality_Specs} from "../models/Tonality_Specs.js";
import {Time_Specs} from "../models/Time_Specs.js";
import {Cancion_Artista} from "../models/Cancion_Artista.js";
import { Op } from "sequelize"
import { Album } from "../models/Album.js";
import { Llave } from "../models/Llave.js";
import { Artista } from "../models/Artista.js";

export const getCancion = async (req,res) => {
    try{
        const response = await Cancion.findAll(
            {   
                
                attributes: ['nombre','popularidad'], 
                include:  [
                    {
                        model: Cancion_Specs,
                        attributes: ['id_cancion_specs'], 
                        include:[{
                            model: Emotional_Specs,
                            attributes: ['bailabilidad','energia','valencia'], 
                        },{
                            model: Time_Specs,
                            attributes: ['tempo','signatura','duracion'],
                        }]
                        
                    },{
                       model : Cancion_Artista,
                       attributes: ['id_artista'],
                       include:{
                            model : Artista,
                            attributes: ['nombre'],
                        }
                    }
                ]

            }
        );
        
        
        
        response.forEach(element => {
           
            let aux = (element.dataValues.cancion_spec.dataValues.time_spec.dataValues.signatura).trim()+"/4";
            delete element.dataValues.cancion_spec.dataValues.time_spec.dataValues.signatura;
            element.dataValues.cancion_spec.dataValues.time_spec.dataValues.signatura = aux;
            
            
        });

        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const getTonalidadCancion = async (req,res) => {
    try{
        const response = await Cancion.findAll(
            {   
                attributes: ['nombre','popularidad'], 
                include:  [
                    {
                        model: Cancion_Specs,
                        attributes: ['id_cancion_specs'], 
                        include:{
                            model: Tonality_Specs,
                            attributes: ['id_llave'],
                            include: {
                                model: Llave,
                                attributes : ['nombre']
                            } 
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

export const deleteCancion = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Cancion.destroy({
            where: {id_cancion:id}
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
    
}