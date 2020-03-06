import Product from "./Product"

/*
 * Represents one line item on order/in cart. Includes product as well as any tax
 * on the item
*/
class LineItem {
    
    public salesTax: number
    public importTax: number

    constructor(product: Product) {

    }

    private calcTax() {
        
    }
}

export default LineItem