import { Request, Response } from 'express'

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

  public getClientes(req: Request, res: Response) {
    let pOpcion = 1   //Todos los usuarios
    let pNom_Cli = 'Vacio'
    let pApe_Cli = 'Vacio'
    let pNoID_Cli = '0'
    let pTel_Cli = 'Vacio'
    let pEmail_Cli = 'Vacio'
    let pDir_Cli = 'Vacio'

    let sql = `CALL SP_Obtener_Clientes(${pOpcion},0,'${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}',${pTel_Cli},'${pEmail_Cli}','${pDir_Cli})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json(results[0])    //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
    });

  };

  public putClientes(req: Request, res: Response) {

    let pOpcion = 2   //Modificar
    let pID_Cli = req.body.pID_Cli
    let pNom_Cli = req.body.pNom_Cli
    let pApe_Cli = req.body.pApe_Cli
    let pNoID_Cli = req.body.pNoID_Cli
    let pTel_Cli = req.body.pTel_Cli
    let pEmail_Cli = req.body.pEmail_Cli
    let pDir_Cli = req.body.pDir_Cli

    let sql = `CALL SP_Modificar_Clientes(${pOpcion},0,'${pID_Cli}','${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}',${pTel_Cli},'${pEmail_Cli}','${pDir_Cli})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

  public postClientes(req: Request, res: Response) {
    
    let pOpcion = 3   //Insercion
    let pNom_Cli = req.body.pNom_Cli
    let pApe_Cli = req.body.pApe_Cli
    let pNoID_Cli = req.body.pNoID_Cli
    let pTel_Cli = req.body.pTel_Cli
    let pEmail_Cli = req.body.pEmail_Cli
    let pDir_Cli = req.body.pDir_Cli

    let sql = `CALL SP_Agregar_Clientes(${pOpcion},0,'${pNom_Cli}','${pApe_Cli}','${pNoID_Cli}',${pTel_Cli},'${pEmail_Cli}','${pDir_Cli})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });
    
  }

  public deleteCliente(req: Request,  res: Response){

    let pOpcion = 4   //Borrar
    let pID_Cliente = req.body.pID_Cliente

    let sql = `CALL SP_Borrar_Clientes(${pOpcion},0,'${pID_Cliente}')`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });

  }

}

const clientesController = new ClientesController();
export default clientesController;