"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '34.71.10.0',
    user: 'root',
    password: 'ceutec*3030',
    database: 'floristeria'
});
class FacturaController {
    constructor() {
        connection.connect();
    }
    getFacturas(req, res) {
        let pOpcion = 1; //Insercion
        let pIDCliente = 0;
        let pNom_Fact = '0';
        let pDireccion_Fact = '0';
        let pCorreo_Fact = '0';
        let pIDProducto = 0;
        let pCantidad = 0;
        let pPrecio = 0;
        let sql = `CALL SP_Facturas(${pOpcion},0,'${pNom_Fact}','${pDireccion_Fact}','${pCorreo_Fact}',${pIDProducto},'${pCantidad}','${pPrecio}',0)`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json(results[0]);
        });
    }
    postFactura(req, res) {
        let pOpcion = 2; //Insercion
        let pIDCliente = 0;
        let pNom_Fact = req.body.pNom_Fact;
        let pDireccion_Fact = req.body.pDireccion_Fact;
        let pCorreo_Fact = req.body.pCorreo_Fact;
        let pIDProducto = 0;
        let pCantidad = 0;
        let pPrecio = 0;
        let sql = `CALL SP_Facturas(${pOpcion},0,'${pNom_Fact}','${pDireccion_Fact}','${pCorreo_Fact}',${pIDProducto},'${pCantidad}','${pPrecio}',0)`;
        //Detalle
        let Detalle = req.body.detalle;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            let Respuesta = JSON.parse(JSON.stringify(results[0]));
            let NuevoID = Respuesta[0].NuevoID;
            //Detalle
            let DetalleBody = req.body.detalle;
            let sqlDetalle;
            res.json(results[0]);
        });
    }
}
const facturaController = new FacturaController();
exports.default = facturaController;
