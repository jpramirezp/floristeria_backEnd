import {Router} from 'express'; 
import empleadosController from '../controller/empleados.controller';

class EmpleadosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getEmpleados',empleadosController.getEmpleados); 
        this.router.post('/postEmpleado',empleadosController.postEmpleados);   
        this.router.post('/deleteEmpleado',empleadosController.deleteEmpleado);
        this.router.post('/putEmpleado',empleadosController.putEmpleados);                          
    }

}

const empleadosRoute = new EmpleadosRoute();          
export default empleadosRoute.router;