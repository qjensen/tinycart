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
        let c = new Cart()
        let p = await this.db.persist(c)
        return await p
    }

    async loadProduct(item){
        let product = new Product({"sku": item.sku, "description": null, "price": null, "exempt": null, "imported": null})
        let p = await this.db.retrieve(product)
        return await p
    }

    async createLineItem(product, cartId){
        let itemInfo = {"product": product}
        let lineItem = new LineItem(itemInfo)
        lineItem.cartId = this.cart.cart_id
        console.log(this.cart)
        let l = this.db.persist(lineItem)
        return await l
    }

    async addLineItems(request, response){
        this.cart = await this.newCart();
        //console.log(this.cart)

        let apiItems = request.body.lineItems
        apiItems.forEach(async item=>{
            let product = await this.loadProduct(item)
            let lineItem = await this.createLineItem(product, this.cart.id)
            //console.log(lineItem)
        })

        response.send("fin")
    }

    public addItems(req, response) {
        let cartId = req.body.cartId
        if(cartId == null) {
            let cp = this.newCart()
            cp.then((cart)=>{
                console.log(cart)
                this.cart = cart
            })
            //console.log(this.cart)
        }

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