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
        connection.connect();
    }
    getClientes(req, res) {
        let pOpcion = 1; //Todos los usuarios
        let pNom_Cli = 'pNom_Cli';
        let pApe_Cli = 'pApe_Cli';
        let pNoID_Cli = 'pNoID_CLi';
        let pTel_Cli = 'pTel_Cli';
        let pEmail_Cli = 'pEmail_Cli';
        let pDir_Cli = 'pDir_Cli';
        let sql = `CALL SP_Clientes(${pOpcion},0,'${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}','${pTel_Cli}','${pEmail_Cli}','${pDir_Cli}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json(results[0]); //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
        });
    }
    ;
    putClientes(req, res) {
        let pOpcion = 2; //Modificar
        let pID_Cli = req.body.pID_Cli;
        let pNom_Cli = req.body.pNom_Cli;
        let pApe_Cli = req.body.pApe_Cli;
        let pNoID_Cli = req.body.pNoID_Cli;
        let pTel_Cli = req.body.pTel_Cli;
        let pEmail_Cli = req.body.pEmail_Cli;
        let pDir_Cli = req.body.pDir_Cli;
        let sql = `CALL SP_Clientes(${pOpcion},0,'${pID_Cli}','${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}',${pTel_Cli},'${pEmail_Cli}','${pDir_Cli})`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    postClientes(req, res) {
        let pOpcion = 3; //Insercion
        let pNom_Cli = req.body.pNom_Cli;
        let pApe_Cli = req.body.pApe_Cli;
        let pNoID_Cli = req.body.pNoID_Cli;
        let pTel_Cli = req.body.pTel_Cli;
        let pEmail_Cli = req.body.pEmail_Cli;
        let pDir_Cli = req.body.pDir_Cli;
        let sql = `CALL SP_Clientes(${pOpcion},0,'${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}',${pTel_Cli},'${pEmail_Cli}','${pDir_Cli}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    deleteCliente(req, res) {
        let pOpcion = 4; //Borrar
        let pID_Cliente = req.body.pID_Cliente;
        let sql = `CALL SP_Clientes(${pOpcion},0,'${pID_Cliente}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
}
const clientesController = new ClientesController();
exports.default = clientesController;
