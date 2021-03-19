"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '34.71.10.0',
    user: 'root',
    password: 'ceutec*3030',
    database: 'floristeria'
});
class UsuariosController {
    constructor() {
        connection.connect();
    }
    getUsuarios(req, res) {
        let pOpcion = 1; //Todos los usuarios
        let pNom_Usuario = 'Vacio';
        let pApe_Usuario = 'Vacio';
        let pTipo_Usuario = 'Vacio';
        let pNoID_Usuario = '0';
        let pArea_Usuario = 'Vacio';
        let pUser_Usuario = 'Vacio';
        let pClave_Usuario = 'Vacio';
        let sql = `CALL SP_Usuarios(${pOpcion},0,'${pNom_Usuario}','${pApe_Usuario}','${pTipo_Usuario}','${pNoID_Usuario}','${pArea_Usuario}','${pUser_Usuario}','${pClave_Usuario}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json(results[0]); //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
        });
    }
    ;
    putUsuarios(req, res) {
        let pOpcion = 4; //Modificar
        let pID_Usuario = req.body.pID_Usuario;
        let pNom_Usuario = req.body.pNom_Usuario;
        let pApe_Usuario = req.body.pApe_Usuario;
        let pNoID_Usuario = req.body.pNoID_Usuario;
        let pTipo_Usuario = req.body.pTipo_Usuario;
        let pArea_Usuario = req.body.pArea_Usuario;
        let pUser_Usuario = req.body.pUser_Usuario;
        let pClave_Usuario = req.body.pClave_Usuario;
        let sql = `CALL SP_Usuarios(${pOpcion},'${pID_Usuario}','${pNom_Usuario}','${pApe_Usuario}','${pNoID_Usuario}','${pTipo_Usuario}','${pArea_Usuario}','${pUser_Usuario}','${pClave_Usuario}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    postUsuarios(req, res) {
        let pOpcion = 3; //Insercion
        let pNom_Usuario = req.body.pNom_Usuario;
        let pApe_Usuario = req.body.pApe_Usuario;
        let pNoID_Usuario = req.body.pNoID_Usuario;
        let pTipo_Usuario = req.body.pTipo_Usuario;
        let pArea_Usuario = req.body.pArea_Usuario;
        let pUser_Usuario = req.body.pUser_Usuario;
        let pClave_Usuario = req.body.pClave_Usuario;
        let sql = `CALL SP_Usuarios(${pOpcion},0,'${pNom_Usuario}','${pApe_Usuario}','${pNoID_Usuario}','${pTipo_Usuario}','${pArea_Usuario}','${pUser_Usuario}','${pClave_Usuario}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    deleteUsuario(req, res) {
        let pOpcion = 6; //Borrar
        let pID_Usuario = req.body.pID_Usuario;
        let pNom_Usuario = req.body.pNom_Usuario;
        let pApe_Usuario = req.body.pApe_Usuario;
        let pNoID_Usuario = req.body.pNoID_Usuario;
        let pTipo_Usuario = req.body.pTipo_Usuario;
        let pArea_Usuario = req.body.pArea_Usuario;
        let pUser_Usuario = req.body.pUser_Usuario;
        let pClave_Usuario = req.body.pClave_Usuario;
        let sql = `CALL SP_Usuarios(${pOpcion},0,'${pNom_Usuario}','${pApe_Usuario}','${pNoID_Usuario}','${pTipo_Usuario}','${pArea_Usuario}','${pUser_Usuario}','${pClave_Usuario}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    getLogin(req, res) {
        let pOpcion = 5; //Login 
        let pUser_Usuario = req.body.User_Usuario;
        let pClave_Usuario = req.body.Clave_Usuario;
        let sql = `CALL SP_Usuarios(${pOpcion},0,'0','0','0','0','0','${pUser_Usuario}','${pClave_Usuario}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            if (results[0].length > 0)
                res.json({ status: 'OK' });
            else
                res.json({ status: 'ERROR' });
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
