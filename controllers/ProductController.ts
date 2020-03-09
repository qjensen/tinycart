import CartDb from "../db/CartDb"
import Product from "../models/Product"

class ProductController {
    public db

    constructor(){
        this.db = CartDb.getInstance()
    }

    // load one or more products from provided json
    public createProduct(req,res) {
        let db = CartDb.getInstance();
        let apiProducts = req.body.products;
        apiProducts.forEach(async (prod)=>{
           this.db.persist(new Product(prod))
        })
        res.send(req.body)
    }

    public loadProduct(productId) {
        
    }

    public removeProduct() {

    }
}

export default ProductController
