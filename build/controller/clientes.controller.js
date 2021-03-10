"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '34.71.10.0',
    user: 'root',
    password: 'ceutec*3030',
    database: 'floristeria'
});
class ClientesController {
    constructor() {
    }
    raiz(req, res) {
        return res.json({ status: 'SE ENCUENTRA EN LA RAIZ DE LA RUTA CLIENTES' });
    }
    ;
    getClientesTEST(req, res) {
        return res.json({
            status: 'ok',
            clase: 'ING SOFT 2',
            universidad: "CEUTEC"
        });
    }
    ;
    getClientes(req, res) {
        connection.connect();
        connection.query('SELECT * from CLIENTES', function (error, results, fields) {
            if (error)
                throw error;
            console.log(results[0]);
            res.json(results);
        });
        connection.end();
    }
    ;
}
const clientesController = new ClientesController();
exports.default = clientesController;
