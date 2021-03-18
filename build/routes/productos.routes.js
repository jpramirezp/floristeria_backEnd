"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controller_1 = __importDefault(require("../controller/productos.controller"));
class ProductosRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getProductos', productos_controller_1.default.getProductos); //http://localhost:3500/api/productos/postProducto
        this.router.post('/postProducto', productos_controller_1.default.postProductos); //http://localhost:3500/api/productos/postProducto
    }
}
;
const productosRoute = new ProductosRoute();
exports.default = productosRoute.router;
