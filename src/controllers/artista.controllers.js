import {Artista} from '../models/Artista.js';
import { Op } from 'sequelize';
//import {} from ''

export const getArtista = async (req,res) => {
    try{
        const response = await Artista.findAll();
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const searchArtista = async (req,res)=>{
    
    try {
        let {nombre} =req.params;
        const response = await Artista.findAll({
            where:{
                
                [Op.or] : [{nombre : {[Op.like]: nombre+'%'}},{nombre:nombre},{nombre:{ [Op.like]: nombre.substring(0,4)+'%'}}]
                
              }
        }
       
        )
        res.status(200).json(response)
        
    } catch (error) {
        res.status(500).json({"error": error.message});
        
    }
}

export const createArtista = async (req,res)=>{
    try{
        const {nombre,popularidad,anio_nacimiento} = req.body;
        const response = await Artista.findAll({where:{nombre}});
        
        if(response.length){
            res.status(200).json({"Mensaje":"El registro ya existe"});
            return;
        }
        const createArtista = await Artista.create({
            nombre,
            popularidad,
            anio_nacimiento
        }); 

        res.status(200).json(createArtista);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const getMostPopularArtistas = async (req,res) => {
    try{
       
        const response = await Artista.findAll({
            attributes: ['id_artista','nombre','popularidad'],
            where: {
                popularidad:{[Op.gt]:85},
            }
        })
        res.status(200).json(response); 
        

        }catch(err){
        res.status(500).json({"error": err.message});
    }
}