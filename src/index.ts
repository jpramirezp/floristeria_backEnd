import express, { Application } from 'express';        
import cors from 'cors';                
import bodyParser from 'body-parser';   
import morgan from 'morgan';
import clientesRoutes from './routes/clientes.routes';
import productosRoutes from './routes/productos.routes';
import proveedoresRoutes from './routes/proveedores.routes';
import empleadosRoutes from './routes/empleados.routes';
import usuariosRoutes from './routes/usuarios.routes';
import facturasRoutes from './routes/facturas.routes';

class Server {

    public app: Application;

    constructor(){
        this.app = express()     
        this.config()   
        this.routes()
    }

    //Configura la Aplicacion
    config(): void {                     
        this.app.set('port', process.env.PORT || 3500);   
        this.app.use(morgan('dev'));              
        this.app.use(cors());     
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));   
        this.app.use(bodyParser.json({ limit: '10mb' }))    
     }

     //Establece las rutas a utilizar, e indica la clase de sub rutas
     routes(): void {
        this.app.use('/api/clientes',clientesRoutes);  
        this.app.use('/api/productos',productosRoutes);  
        this.app.use('/api/proveedores',proveedoresRoutes);  
        this.app.use('/api/empleados',empleadosRoutes);  
        this.app.use('/api/usuarios',usuariosRoutes);     
        this.app.use('/api/facturas',facturasRoutes);     
     }

     //Metodo para iniciar la aplicacion
     start(): void {
        this.app.listen(this.app.get('port'), () => {
           console.log('API LISTA EN PUERTO: ', this.app.get('port'));
        });    
     }
};

const server = new Server(); 
server.start();   