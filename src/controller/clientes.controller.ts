import { Request, Response } from 'express'

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '34.71.10.0',
  user     : 'root',
  password : 'ceutec*3030',
  database : 'floristeria'
});

class ClientesController {
    
    constructor(){     
    }

    public raiz(req: Request, res: Response){
        return res.json({status:'SE ENCUENTRA EN LA RAIZ DE LA RUTA CLIENTES'})
    };

    public getClientesTEST(req: Request, res: Response){
        return res.json({
                        status:'ok', 
                        clase:'ING SOFT 2', 
                        universidad:"CEUTEC"
                        })
    };

    public getClientes(req: Request, res: Response){
        connection.connect();

        connection.query('SELECT * from CLIENTES', function (error: any, results: { solution: any; }[], fields: any) {
            if (error) throw error;
            console.log(results[0]);
            res.json(results)
          });
           
          connection.end();
    };
 

}

const clientesController = new ClientesController();
export default clientesController;