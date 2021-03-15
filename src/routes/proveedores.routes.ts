import {Router} from 'express'; 
import proveedoresController from '../controller/proveedores.controller';

class ProveedoresRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getProveedores',proveedoresController.getProveedores);                         
    }

}

const proveedoresRoute = new ProveedoresRoute();          
export default proveedoresRoute.router;