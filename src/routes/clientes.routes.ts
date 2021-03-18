import {Router} from 'express'; 
import clientesController from '../controller/clientes.controller';

class ClientesRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {
        this.router.get('/getClientes',clientesController.getClientes); 
        this.router.post('/postClientes',clientesController.postClientes);   
        this.router.delete('/deleteClientes',clientesController.deleteCliente);
        this.router.put('/putClientes',clientesController.putClientes);                        
    }

}

const clientesRoute = new ClientesRoute();          
export default clientesRoute.router;