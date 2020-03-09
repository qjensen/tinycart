"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartDb_1 = __importDefault(require("../db/CartDb"));
const Product_1 = __importDefault(require("../models/Product"));
class ProductController {
    constructor() {
        this.db = CartDb_1.default.getInstance();
    }
    // load one or more products from provided json
    createProduct(req, res) {
        let db = CartDb_1.default.getInstance();
        let apiProducts = req.body.products;
        apiProducts.forEach((prod) => __awaiter(this, void 0, void 0, function* () {
            this.db.persist(new Product_1.default(prod));
        }));
        res.send(req.body);
    }
    loadProduct(productId) {
    }
    removeProduct() {
    }
}
exports.default = ProductController;
