"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConfigManager_1 = __importDefault(require("./ConfigManager"));
class App {
    constructor() {
        this.express = express_1.default();
        this.config = new ConfigManager_1.default();
        this.loadRoutes();
        console.log(this.config);
    }
    loadRoutes() {
        this.express.get('/', (req, res) => {
            res.send('This is an api for tinycart');
        });
        this.express.post('/product/add', (req, res) => {
            res.send('This is for adding a product');
        });
    }
}
exports.App = App;
exports.default = new App().express;
