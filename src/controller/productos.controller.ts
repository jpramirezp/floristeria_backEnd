import { Request, Response } from 'express'

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '34.71.10.0',
  user: 'root',
  password: 'ceutec*3030',
  database: 'floristeria'
});

class ProductosController {

  constructor() {
    connection.connect();
  }

  public getProductos(req: Request, res: Response) {
    let pOpcion = 1   //Todos los productos
    let pNom_Prod = 'Vacio'
    let pTipo_Prod = 'Vacio'
    let pNoID_Prod = '0'
    let pCant_Prod = '0'
    let pDescripcion = 'Vacio'
    let pURL_imagen = 'Vacio'
    let pPrecio = 0

    let sql = `CALL SP_Productos(${pOpcion},0,'${pNom_Prod}','${pTipo_Prod}','${pNoID_Prod}',${pCant_Prod},'${pDescripcion}','${pURL_imagen}',${pPrecio})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json(results[0])    //El Result es un Array de Arrays, en la posicion cera esta el array del Recordset, en la posicion 1 Metadata
    });

  };

  public putProductos(req: Request, res: Response) {

    let pOpcion = 3   //Modificación
    let pNom_Prod = req.body.pNom_Prod
    let pTipo_Prod = req.body.pTipo_Prod
    let pNoID_Prod = req.body.pNoID_Prod
    let pCant_Prod = req.body.pCant_Prod
    let pDescripcion = req.body.pDescripcion
    let pURL_imagen = req.body.pURL_imagen
    let pPrecio = req.body.pPrecio

  }

  public postProductos(req: Request, res: Response) {
    
    let pOpcion = 3   //Insercion
    let pNom_Prod = req.body.pNom_Prod
    let pTipo_Prod = req.body.pTipo_Prod
    let pNoID_Prod = req.body.pNoID_Prod
    let pCant_Prod = req.body.pCant_Prod
    let pDescripcion = req.body.pDescripcion
    let pURL_imagen = req.body.pURL_imagen
    let pPrecio = req.body.pPrecio

    let sql = `CALL SP_Productos(${pOpcion},0,'${pNom_Prod}','${pTipo_Prod}','${pNoID_Prod}',${pCant_Prod},'${pDescripcion}','${pURL_imagen}',${pPrecio})`;

    connection.query(sql, true, (error: { message: any; }, results: any[], fields: any) => {
      if (error) {
        res.json({status:'ERROR'})
        return console.error(error.message);
      }
      res.json({status:'OK'})
    });


  }


}

const productosController = new ProductosController();
export default productosController;