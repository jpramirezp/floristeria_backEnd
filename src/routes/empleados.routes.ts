import {Router} from 'express'; 
import empleadosController from '../controller/empleados.controller';

class EmpleadosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getClientes',empleadosController.getEmpleados);                         
    }

}

const empleadosRoute = new EmpleadosRoute();          
export default empleadosRoute.router;