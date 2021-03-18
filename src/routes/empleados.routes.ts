import {Router} from 'express'; 
import empleadosController from '../controller/empleados.controller';

class EmpleadosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getEmpleados',empleadosController.getEmpleados); 
        this.router.post('/postEmpleados',empleadosController.postEmpleados);   
        this.router.delete('/deleteEmpleados',empleadosController.deleteEmpleado);
        this.router.put('/putEmpleados',empleadosController.putEmpleados);                          
    }

}

const empleadosRoute = new EmpleadosRoute();          
export default empleadosRoute.router;