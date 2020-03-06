import express from "express";
import ConfigManager from "./ConfigManager";

export class App {
    public express
    public config

    constructor() {
        this.express = express()
        this.config = new ConfigManager()
        this.loadRoutes();
        console.log(this.config)
    }

    private loadRoutes() {
        this.express.get('/', (req, res)=>{
            res.send('This is an api for tinycart');
         });

         this.express.post('/product/add/:prodJson', (req, res)=>{
            res.send('This is for adding a product')
         })

         this.express.get('/product/load/:prodId', (req, res)=>{
             res.send('This is for loading a product')
         })

         this.express.put('/product/update/:prodId', (req, res)=>{
            res.send('This would update an existing product')
         })

         this.express.get('/cart/new', (req, res)=>{
             res.send('Create a new cart')
         })

         this.express.post('/cart/add_item/:itemInfo', (req, res)=>{
             res.send('This will add an item to the cart')
         })
    }
}

export default new App().express