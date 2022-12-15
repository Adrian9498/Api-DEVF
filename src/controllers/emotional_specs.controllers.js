import { Emotional_Specs } from "../models/Emotional_Specs.js";

export const getEmotional_specs= async (req,res) => {
    try{
        const response = await Emotional_Specs.findAll();
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}
export const createEmotional_Specs = async (req,res)=>{
        try{
            const {bailabilidad, energia, valencia} = req.body;
            const response = await Emotional_Specs.findAll();
            
            const createAlbum = await Emotional_Specs.create({
                bailabilidad,
                energia,
                valencia
            }); 
    
            res.status(200).json(createAlbum);
        }catch(err){
            res.status(500).json({"error": err.message});
        }
    }