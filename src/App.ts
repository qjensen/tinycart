import express from "express";
import { CookieParser } from "cookie-parser"
import ConfigManager from "./ConfigManager";
import ProductController from '../controllers/ProductController'
import CartController from '../controllers/CartController'

export class App {
    public app
    public config
    private productController
    private cartController

    constructor() {
        this.app = express()
        this.app.use(express.json())
        //this.app.use(CookieParser())
        this.config = new ConfigManager()
        this.loadRoutes();
        this.productController = new ProductController();
        this.cartController = new CartController()
    }

    private loadRoutes() {
        this.app.get('/', (req, res)=>{
            res.send('This is an api for tinycart');
        });

        // add one or more products to the database
        // from an array of json objects
        this.app.post('/product/add/', (req, res) => (this.productController.createProduct(req,res)))

        //this.app.get('/cart/new', (req, res)=>(this.cartController.addLineItems(req,res)))

        this.app.post('/cart/add_item/:cartId/', (req, res)=>{
            res.send('This would add an item to an existing cart')
        })

        // create and load a cart from a json object
        // containing one or more line items
        this.app.post('/cart/load/',  (req, res)=>(this.cartController.addLineItems(req,res)))
    }
}

export default new App().app