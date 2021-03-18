import { Request, Response } from 'express'

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

  public getProveedores(req: Request, res: Response) {
    let pOpcion = 1   //Todos los Proveedores
    let pNom_Prov = 'pNom_Prov'
    let pApe_Prov = 'pApe_Prov'
    let pDir_Prov = 'pDir_Prov'
    let pCorreo_Prov = 'pCorreo_Prov'
    let pNoID_Prov = 'pNoID_Prov'
    let pTel_Prov = 'pTel_Prov'

    let sql = `CALL SP_Proveedores(${pOpcion},0,'${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error('Error: '+error.message);
      }
      res.json(results[0])    //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
    });

  };

  public putProveedores(req: Request, res: Response) {

    let pOpcion = 2   //Modificar
    let pID_Prov = req.body.pID_Prov
    let pNom_Prov = req.body.pNom_Prov
    let pApe_Prov = req.body.pApe_Prov
    let pDir_Prov = req.body.pDir_Prov
    let pCorreo_Prov = req.body.pCorreo_Prov
    let pNoID_Prov = req.body.pNoID_Prov
    let pTel_Prov = req.body.pTel_Prov

    let sql = `CALL SP_Proveedores(${pOpcion},0,'${pID_Prov}','${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

  public postProveedores(req: Request, res: Response) {
    console.log("entrando al postProveedores");
    
    
    let pOpcion = 3   //Insercion
    let pNom_Prov = req.body.pNom_Prov
    let pApe_Prov = req.body.pApe_Prov
    let pDir_Prov = req.body.pDir_Prov
    let pCorreo_Prov = req.body.pCorreo_Prov
    let pNoID_Prov = req.body.pNoID_Prov
    let pTel_Prov = req.body.pTel_Prov

    let sql = `CALL SP_Proveedores(${pOpcion},0,'${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });
    
  }

  public deleteProveedores(req: Request,  res: Response){

    let pOpcion = 4   //Borrar
    let pID_Prov = req.body.pID_Prov
    let pNom_Prov = req.body.pNom_Prov
    let pApe_Prov = req.body.pApe_Prov
    let pDir_Prov = req.body.pDir_Prov
    let pCorreo_Prov = req.body.pCorreo_Prov
    let pNoID_Prov = req.body.pNoID_Prov
    let pTel_Prov = req.body.pTel_Prov

    let sql = `CALL SP_Proveedores(${pOpcion},0,'${pID_Prov}','${pNom_Prov}',
    '${pApe_Prov}','${pDir_Prov}','${pCorreo_Prov}','${pNoID_Prov}','${pTel_Prov}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

}

const proveedoresController = new ProveedoresController();
export default proveedoresController;