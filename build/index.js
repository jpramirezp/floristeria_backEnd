"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const clientes_routes_1 = __importDefault(require("./routes/clientes.routes"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Configura la Aplicacion
    config() {
        this.app.set('port', process.env.PORT || 3500);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.urlencoded({ extended: true, limit: '10mb' }));
        this.app.use(body_parser_1.default.json({ limit: '10mb' }));
    }
    //Establece las rutas a utilizar, e indica la clase de sub rutas
    routes() {
        this.app.use('/api/clientes', clientes_routes_1.default);
        this.app.use('/api/productos', productos_routes_1.default);
    }
    //Metodo para iniciar la aplicacion
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('API LISTA EN PUERTO: ', this.app.get('port'));
        });
    }
}
;
const server = new Server();
server.start();
