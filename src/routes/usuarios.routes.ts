import {Router} from 'express'; 
import usuariosController from '../controller/usuarios.controller';

class UsuariosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getUsuarios',usuariosController.getUsuarios); 
        this.router.post('/postUsuarios',usuariosController.postUsuarios);   
        this.router.delete('/deleteUsuarios',usuariosController.deleteUsuario);
        this.router.put('/putUsuarios',usuariosController.putUsuarios);   

    }

}

const usuariosRoute = new UsuariosRoute();          
export default usuariosRoute.router;