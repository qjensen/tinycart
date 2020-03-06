"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConfigManager_1 = __importDefault(require("./ConfigManager"));
const CartRoutes_1 = require("./CartRoutes");
class App {
    constructor() {
        this.express = express_1.default();
        this.config = new ConfigManager_1.default();
        this.routes = new CartRoutes_1.CartRoutes();
        console.log(this.config);
    }
}
exports.App = App;
exports.default = new App().express;
