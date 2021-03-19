import {Router} from 'express'; 
import facturaController from '../controller/factura.controller';

class FacturasRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {                 
        this.router.post('/postFactura',facturaController.postFactura);        //http://localhost:3500/api/productos/postProducto  
        this.router.get('/getFacturas',facturaController.getFacturas);      
    }

};

const facturasRoute = new FacturasRoute();          
export default facturasRoute.router;