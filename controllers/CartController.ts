import CartDb from "../db/CartDb"
import Cart from "../models/Cart"
import LineItem from "../models/LineItem"
import Product from "../models/Product"

class CartController {
    public db
    private cart

    constructor(){
        this.db = CartDb.getInstance()
    }

    async newCart(){
        //this.cart = new Cart();
        let c = await this.db.persist(new Cart)
        console.log(c)
        return c
    }

    public addLineItems(req, response) {
        let cartId = req.body.cartId
        if(cartId == null) {
            let cp = this.newCart()
            cp.then((cart)=>{
                console.log(cart)
                this.cart = cart
            })
            //console.log(this.cart)
        }
        console.log(this.cart)
        let apiItems = req.body.lineItems
        apiItems.forEach(item=>{
            let product = new Product({"sku": item.sku, "description": null, "price": null, "exempt": null, "imported": null})
            const prodPromise = this.db.retrieve(product)
            prodPromise.then((prod)=>{
                let itemInfo = {product:null}
                let lineItem = new LineItem(itemInfo.product = prod);
                //lineItem.cartId = this.cart.cartId
                //console.log(lineItem)
                //let itemPromise = this.db.persist(lineItem)
                //itemPromise.then((lineItem)=>{
                    //console.log("Created Line Item")
                //})
            })
            
        })
        response.send(cartId)
    }

}

export default CartController