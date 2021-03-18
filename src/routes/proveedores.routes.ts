import {Router} from 'express'; 
import proveedoresController from '../controller/proveedores.controller';

class ProveedoresRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getProveedores',proveedoresController.getProveedores); 
        this.router.post('/postProveedores',proveedoresController.postProveedores);   
        this.router.delete('/deleteProveedores',proveedoresController.deleteProveedores);
        this.router.put('/putProveedores',proveedoresController.putProveedores);                         
    }

}

const proveedoresRoute = new ProveedoresRoute();          
export default proveedoresRoute.router;