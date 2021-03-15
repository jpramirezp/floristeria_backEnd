import { Request, Response } from 'express'

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

  public getUsuarios(req: Request, res: Response) {
    let pOpcion = 1   //Todos los usuarios
    let pNom_Usuario = 'Vacio'
    let pApe_Usuario = 'Vacio'
    let pTipo_Usuario = 'Vacio'
    let pNoID_Usuario = '0'
    let pArea_Usuario = 'Vacio'
    let pUser_Usuario = 'Vacio'
    let pClave_Usuario = 'Vacio'

    let sql = `CALL SP_Obtener_Usuarios(${pOpcion},0,'${pNom_Usuario}','${pApe_Usuario}','${pTipo_Usuario}',${pNoID_Usuario},'${pArea_Usuario}','${pUser_Usuario}',${pClave_Usuario})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json(results[0])    //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
    });

  };

  public putUsuarios(req: Request, res: Response) {

    let pOpcion = 2   //Modificar
    let pID_Usuario = req.body.pID_Usuario
    let pNom_Usuario = req.body.pNom_Usuario
    let pApe_Usuario = req.body.pApe_Usuario
    let pNoID_Usuario = req.body.pNoID_Usuario
    let pTipo_Usuario = req.body.pTipo_Usuario
    let pArea_Usuario = req.body.pArea_Usuario
    let pUser_Usuario = req.body.pUser_Usuario
    let pClave_Usuario = req.body.pClave_Usuario

    let sql = `CALL SP_Modificar_Usuarios(${pOpcion},0,'${pID_Usuario}','${pNom_Usuario}','${pApe_Usuario}','${pNoID_Usuario}',${pTipo_Usuario},'${pArea_Usuario}','${pUser_Usuario}',${pClave_Usuario})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

  public postUsuarios(req: Request, res: Response) {
    
    let pOpcion = 3   //Insercion
    let pNom_Usuario = req.body.pNom_Usuario
    let pApe_Usuario = req.body.pApe_Usuario
    let pNoID_Usuario = req.body.pNoID_Usuario
    let pTipo_Usuario = req.body.pTipo_Usuario
    let pArea_Usuario = req.body.pArea_Usuario
    let pUser_Usuario = req.body.pUser_Usuario
    let pClave_Usuario = req.body.pClave_Usuario

    let sql = `CALL SP_Agregar_Usuarios(${pOpcion},0,'${pNom_Usuario}','${pApe_Usuario}','${pNoID_Usuario}',${pTipo_Usuario},'${pArea_Usuario}','${pUser_Usuario}',${pClave_Usuario})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });
    
  }

  public deleteUsuario(req: Request,  res: Response){

    let pOpcion = 4   //Borrar
    let pID_Usuario = req.body.pID_Usuario

    let sql = `CALL SP_Borrar_Usuarios(${pOpcion},0,'${pID_Usuario}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

}

const usuariosController = new UsuariosController();
export default usuariosController;