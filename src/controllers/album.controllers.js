import { Album } from "../models/Album.js"
import { Artista } from "../models/Artista.js"
import { Op } from 'sequelize';

export const getAlbum = async (req,res) => {
    try{
        const response = await Album.findAll({
            attributes: ['nombre'],
            include: [
                {
                    model: Artista,
                    attributes: ['nombre', 'popularidad'],
                }
            ]
        });
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const searchAlbum = async (req,res)=>{
    
    try {
        let {nombre} =req.params;
        const response = await Album.findAll({
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

export const createAlbum = async (req,res)=>{
    try{
        const {nombre,nombre_artista} = req.body;

        const response = await Album.findAll({where:{nombre}});
        
        if(response.length){
            res.status(200).json({"Mensaje":"El registro ya existe"});
            return;
        }

        const aux = await Artista.findAll({where:{nombre:nombre_artista}});

        if(!aux.length){
            res.status(200).json({"Mensaje":"El artista no existe"});
            return;
        }
        
        const createAlbum = await Album.create({
            
            nombre,
            id_artista:aux[0].dataValues.id_artista,
        });

        res.status(200).json(createAlbum);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}

export const deleteAlbum = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await Album.destroy({
            where: {id_Album:id}
        });
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
};

