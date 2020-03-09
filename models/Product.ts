class Product {
    public sku:string
    public description:string
    public price:number
    public exempt:boolean
    public imported:boolean
    public fields: string[]
    public table
    public pk

    constructor(apiProduct) {
        this.table = 'products'
        this.pk = 'sku';
        this.fields = ['sku', 'description', 'price', 'exempt', 'imported']

        //now assign the attribute values
        this.sku = apiProduct.sku
        this.description = apiProduct.description
        this.price = apiProduct.price
        this.exempt = apiProduct.exempt
        this.imported = apiProduct.imported
    }
}

export default Product