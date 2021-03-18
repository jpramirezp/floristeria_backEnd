import {Router} from 'express'; 
import clientesController from '../controller/clientes.controller';

class ClientesRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getClientes',clientesController.getClientes); 
        this.router.post('/postCliente',clientesController.postClientes);   
        this.router.post('/deleteCliente',clientesController.deleteCliente);
        this.router.post('/putClientes',clientesController.putClientes);                        
    }

}

const clientesRoute = new ClientesRoute();          
export default clientesRoute.router;