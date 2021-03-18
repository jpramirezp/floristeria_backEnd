"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_controller_1 = __importDefault(require("../controller/empleados.controller"));
class EmpleadosRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getEmpleados', empleados_controller_1.default.getEmpleados);
        this.router.post('/postEmpleado', empleados_controller_1.default.postEmpleados);
        this.router.post('/deleteEmpleado', empleados_controller_1.default.deleteEmpleado);
        this.router.post('/putEmpleado', empleados_controller_1.default.putEmpleados);
    }
}
const empleadosRoute = new EmpleadosRoute();
exports.default = empleadosRoute.router;
