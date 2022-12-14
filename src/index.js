import app from './app.js';
import {sequelize} from './database/database.js';
import {Album} from './models/Album.js';
import {Artista} from './models/Artista.js';
import {Cancion_Artista} from './models/Cancion_Artista.js';
import {Cancion_Specs} from './models/Cancion_Specs.js';
import {Cancion} from './models/Cancion.js';
import {Emotional_Specs} from './models/Emotional_Specs.js';
import {Llave} from './models/Llave.js';
import {Modo} from './models/Modo.js';
import {Time_Specs} from './models/Time_Specs.js';
import {Tonality_Specs} from './models/Tonality_Specs.js';

async function main(){
    try{
        
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexion a la base correcta");
        app.listen(3000);
        console.log('Servidor ON');
        
    }catch(e){
        console.log(e);
    }
    
}

main();