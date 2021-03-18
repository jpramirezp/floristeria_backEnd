import {Router} from 'express'; 
import productosController from '../controller/productos.controller';

class ProductosRoute{       

    public router: Router = Router();     
    
    constructor(){
        this.config();        
    }
   
    config ():void {                 
        this.router.get('/getProductos',productosController.getProductos);        //http://localhost:3500/api/productos/postProducto
        this.router.post('/postProducto',productosController.postProductos);        //http://localhost:3500/api/productos/postProducto
        this.router.post('/putProducto',productosController.putProductos);        //http://localhost:3500/api/productos/postProducto
        this.router.post('/deleteProducto',productosController.deleteProducto);        //http://localhost:3500/api/productos/postProducto
    }

};

const productosRoute = new ProductosRoute();          
export default productosRoute.router;