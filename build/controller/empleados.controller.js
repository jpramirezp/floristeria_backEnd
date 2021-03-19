"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '34.71.10.0',
    user: 'root',
    password: 'ceutec*3030',
    database: 'floristeria'
});
class EmpleadosController {
    constructor() {
        connection.connect();
    }
    getEmpleados(req, res) {
        let pOpcion = 1; //Todos los empleados
        let pNom_Emp = 'Vacio';
        let pApe_Emp = 'Vacio';
        let pNoID_Emp = '0';
        let pTel_Emp = '0';
        let pCargo_Emp = 'Vacio';
        let pArea_Emp = 'Vacio';
        let pDir_Emp = 'Vacio';
        let pEstado_Emp = 'Vacio';
        let pFec_Ingreso = '2021-03-17';
        let pFec_Salida = '2021-03-17';
        let sql = `CALL SP_Empleados(${pOpcion},0,'${pNom_Emp}','${pApe_Emp}',
    '${pNoID_Emp}','${pTel_Emp}','${pCargo_Emp}','${pArea_Emp}','${pDir_Emp}',
    '${pEstado_Emp}',DATE('${pFec_Ingreso}'),DATE('${pFec_Salida}'))`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json(results[0]); //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
        });
    }
    ;
    putEmpleados(req, res) {
        let pOpcion = 2; //Modificar
        let pID_Emp = req.body.pID_Emp;
        let pNom_Emp = req.body.pNom_Emp;
        let pApe_Emp = req.body.pApe_Emp;
        let pNoID_Emp = req.body.pNoID_Emp;
        let pTel_Emp = req.body.pTel_Emp;
        let pCargo_Emp = req.body.pCargo_Emp;
        let pArea_Emp = req.body.pArea_Emp;
        let pDir_Emp = req.body.pDir_Emp;
        let pEstado_Emp = req.body.pEstado_Emp;
        let pFec_Ingreso = req.body.pFec_Ingreso;
        let pFec_Salida = req.body.pFec_Salida;
        let sql = `CALL SP_Empleados(${pOpcion},0,'${pID_Emp}','${pNom_Emp}','${pApe_Emp}','${pNoID_Emp}',
    '${pTel_Emp}','${pCargo_Emp}','${pArea_Emp}','${pDir_Emp}','${pEstado_Emp}','${pFec_Ingreso}',
    '${pFec_Salida}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    postEmpleados(req, res) {
        let pOpcion = 3; //Insercion
        let pNom_Emp = req.body.pNom_Emp;
        let pApe_Emp = req.body.pApe_Emp;
        let pNoID_Emp = req.body.pNoID_Emp;
        let pTel_Emp = req.body.pTel_Emp;
        let pCargo_Emp = req.body.pCargo_Emp;
        let pArea_Emp = req.body.pArea_Emp;
        let pDir_Emp = req.body.pDir_Emp;
        let pEstado_Emp = req.body.pEstado_Emp;
        let pFec_Ingreso = req.body.pFec_Ingreso;
        let pFec_Salida = req.body.pFec_Salida;
        let sql = `CALL SP_Empleados(${pOpcion},0,'${pNom_Emp}','${pApe_Emp}','${pNoID_Emp}',
    '${pTel_Emp}','${pCargo_Emp}','${pArea_Emp}','${pDir_Emp}','${pEstado_Emp}','${pFec_Ingreso}',
    '${pFec_Salida}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
    deleteEmpleado(req, res) {
        let pOpcion = 4; //Borrar
        let pID_Emp = req.body.pID_Emp;
        let pNom_Emp = 'Vacio';
        let pApe_Emp = 'Vacio';
        let pNoID_Emp = '0';
        let pTel_Emp = '0';
        let pCargo_Emp = 'Vacio';
        let pArea_Emp = 'Vacio';
        let pDir_Emp = 'Vacio';
        let pEstado_Emp = 'Vacio';
        let pFec_Ingreso = 'Vacio';
        let pFec_Salida = 'Vacio';
        let sql = `CALL SP_Empleados(${pOpcion}'${pID_Emp}','${pNom_Emp}','${pApe_Emp}','${pNoID_Emp}',
    '${pTel_Emp}','${pCargo_Emp}','${pArea_Emp}','${pDir_Emp}','${pEstado_Emp}','${pFec_Ingreso}',
    '${pFec_Salida}')`;
        connection.query(sql, true, (error, results, fields) => {
            if (error) {
                res.json({ status: 'ERROR' });
                return console.error(error.message);
            }
            res.json({ status: 'OK' });
        });
    }
}
const empleadosController = new EmpleadosController();
exports.default = empleadosController;
