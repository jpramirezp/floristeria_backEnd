"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedores_controller_1 = __importDefault(require("../controller/proveedores.controller"));
class ProveedoresRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getProveedores', proveedores_controller_1.default.getProveedores);
        this.router.post('/postProveedores', proveedores_controller_1.default.postProveedores);
        this.router.post('/deleteProveedor', proveedores_controller_1.default.deleteProveedores);
        this.router.post('/putProveedor', proveedores_controller_1.default.putProveedores);
    }
}
const proveedoresRoute = new ProveedoresRoute();
exports.default = proveedoresRoute.router;
