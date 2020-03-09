"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConfigManager_1 = __importDefault(require("./ConfigManager"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
class App {
    constructor() {
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        //this.app.use(CookieParser())
        this.config = new ConfigManager_1.default();
        this.loadRoutes();
        this.productController = new ProductController_1.default();
        this.cartController = new CartController_1.default();
    }
    loadRoutes() {
        this.app.get('/', (req, res) => {
            res.send('This is an api for tinycart');
        });
        // add one or more products to the database
        // from an array of json objects
        this.app.post('/product/add/', (req, res) => (this.productController.createProduct(req, res)));
        //this.app.get('/cart/new', (req, res)=>(this.cartController.addLineItems(req,res)))
        this.app.post('/cart/add_item/:cartId/', (req, res) => {
            res.send('This would add an item to an existing cart');
        });
        // create and load a cart from a json object
        // containing one or more line items
        this.app.post('/cart/load/', (req, res) => (this.cartController.addLineItems(req, res)));
    }
}
exports.App = App;
exports.default = new App().app;
