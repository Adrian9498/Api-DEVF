import { Album } from "../models/Album.js"
//simport {} from ''

export const getAlbum = async (req,res) => {
    try{
        const response = await Album.findAll();
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({"error": err.message});
    }
}
