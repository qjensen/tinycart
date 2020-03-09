import Product from "./Product"
import ConfigManager from "../src/ConfigManager"

/*
 * Represents one line item on order/in cart. Includes product as well as any tax
 * on the item
*/
class LineItem {
    
    public salesTax: number
    public importTax: number
    public quantity
    public price
    public sku
    public description
    public cartId
    private exempt
    private imported
    public fields
    public pk
    public table

    constructor(itemInfo) {
        this.fields = ['line_item_id', 'sku', 'description', 'price', 'sales_tax', 'import_tax', 'cart_id']
        this.pk = 'line_item_id'
        this.table = 'line_items'
        // if the caller passed a product in the json object
        // use that object to build a line item
        // othewise use the other json values
        if(itemInfo.product){
            itemInfo = itemInfo.product
        }
        this.cartId = itemInfo.cartId
        this.sku = itemInfo.sku
        this.description = itemInfo.description
        this.price = itemInfo.price
        this.exempt = itemInfo.exempt
        this.imported = itemInfo.imported
        
        this.salesTax = 0
        this.importTax = 0

        if(!itemInfo.exempt) {
            this.salesTax = itemInfo.price * .1
        }

        if(itemInfo.imported){
            this.importTax = itemInfo.price * .05
        }
    }
}

export default LineItem