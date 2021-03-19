"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_controller_1 = __importDefault(require("../controller/factura.controller"));
class FacturasRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/postFactura', factura_controller_1.default.postFactura); //http://localhost:3500/api/productos/postProducto  
        this.router.get('/getFacturas', factura_controller_1.default.getFacturas);
    }
}
;
const facturasRoute = new FacturasRoute();
exports.default = facturasRoute.router;
