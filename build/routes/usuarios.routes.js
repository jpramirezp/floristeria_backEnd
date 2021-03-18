"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = __importDefault(require("../controller/usuarios.controller"));
class UsuariosRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getUsuarios', usuarios_controller_1.default.getUsuarios);
        this.router.post('/postUsuarios', usuarios_controller_1.default.postUsuarios);
        this.router.delete('/deleteUsuarios', usuarios_controller_1.default.deleteUsuario);
        this.router.put('/putUsuarios', usuarios_controller_1.default.putUsuarios);
        this.router.post('/getlogin', usuarios_controller_1.default.getLogin);
    }
}
const usuariosRoute = new UsuariosRoute();
exports.default = usuariosRoute.router;
