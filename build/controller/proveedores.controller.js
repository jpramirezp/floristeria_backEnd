"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '34.71.10.0',
    user: 'root',
    password: 'ceutec*3030',
    database: 'floristeria'
});
class ProveedoresController {
    constructor() {
        connection.connect();
    }
    getProveedores(req, res) {
        let pOpcion = 1; //Todos los Proveedores
        let pNom_Prov = 'Vacio';
        let pApe_Prov = 'Vacio';
        let pDir_Prov = 'Vacio';
        let pCorreo_Prov = 'Vacio';
        let pNoID_Prov = '0';
        let pTel_Prov = 'Vacio';
        let sql = `CALL SP_Proveedores(${pOpcion},0,'${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error('Error: ' + error.message);
            }
            res.json(results[0]); //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
        });
    }
    ;
    putProveedores(req, res) {
        let pOpcion = 4; //Modificar
        let pID_Prov = req.body.pID_Prov;
        let pNom_Prov = req.body.pNom_Prov;
        let pApe_Prov = req.body.pApe_Prov;
        let pDir_Prov = req.body.pDir_Prov;
        let pCorreo_Prov = req.body.pCorreo_Prov;
        let pNoID_Prov = req.body.pNoID_Prov;
        let pTel_Prov = req.body.pTel_Prov;
        let sql = `CALL SP_Proveedores(${pOpcion},'${pID_Prov}','${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    postProveedores(req, res) {
        console.log("entrando al postProveedores");
        let pOpcion = 3; //Insercion
        let pNom_Prov = req.body.pNom_Prov;
        let pApe_Prov = req.body.pApe_Prov;
        let pDir_Prov = req.body.pDir_Prov;
        let pCorreo_Prov = req.body.pCorreo_Prov;
        let pNoID_Prov = req.body.pNoID_Prov;
        let pTel_Prov = req.body.pTel_Prov;
        let sql = `CALL SP_Proveedores(${pOpcion},0,'${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    deleteProveedores(req, res) {
        let pOpcion = 5; //Borrar
        let pID_Prov = req.body.pID_Prov;
        let pNom_Prov = 'Vacio';
        let pApe_Prov = 'Vacio';
        let pDir_Prov = 'Vacio';
        let pCorreo_Prov = 'Vacio';
        let pNoID_Prov = '0';
        let pTel_Prov = 'Vacio';
        let sql = `CALL SP_Proveedores(${pOpcion},'${pID_Prov}','${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
}
const proveedoresController = new ProveedoresController();
exports.default = proveedoresController;
