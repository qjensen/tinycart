import express from "express"

export class CartRoutes {
    private router

    constructor() {
        this.router = express.Router
        this.loadProductRoutes();
    }

    loadProductRoutes() {
        this.router.get('/', function(req, res){
            res.send('GET route on things.');
         });
    }
}

export default routes