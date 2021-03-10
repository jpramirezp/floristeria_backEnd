"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controller_1 = __importDefault(require("../controller/clientes.controller"));
class ClientesRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientes_controller_1.default.raiz);
        this.router.get('/getClientes', clientes_controller_1.default.getClientes);
    }
}
const clientesRoute = new ClientesRoute();
exports.default = clientesRoute.router;
