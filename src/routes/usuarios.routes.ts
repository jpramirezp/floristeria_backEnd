import {Router} from 'express'; 
import usuariosController from '../controller/usuarios.controller';

class UsuariosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getClientes',usuariosController.getUsuarios);                         
    }

}

const usuariosRoute = new UsuariosRoute();          
export default usuariosRoute.router;