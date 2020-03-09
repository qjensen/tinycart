import LineItem from "./LineItem"

class Cart {
    private items: Array<LineItem>
    private table
    public fields: string[]
    public pk
    public cart_id

    constructor() {
        this.items = []
        this.table = "cart"
        this.pk = "cart_id"
        this.fields = ["cart_id", "date_created"]
    }

    public addItem(item: LineItem) {

    }

    public removeItem(item: LineItem) {

    }

    public save() {

    }

    public getTotals() {
        
    }
}

export default Cart