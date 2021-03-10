import express, { Application } from 'express';        
import cors from 'cors';                
import bodyParser from 'body-parser';   
import morgan from 'morgan';
import clientesRoutes from './routes/clientes.routes';
import productosRoutes from './routes/productos.routes';

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