"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class CartRoutes {
    constructor() {
        this.router = express_1.default.Router;
        this.loadProductRoutes();
    }
    loadProductRoutes() {
        this.router.get('/', function (req, res) {
            res.send('GET route on things.');
        });
    }
}
exports.CartRoutes = CartRoutes;
exports.default = routes;
