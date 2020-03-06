class Product {

    public sku:string
    public description:string
    public price:number
    public exempt:boolean
    public imported:boolean
    public fields: any[]

    constructor(sku:string,description:string,price:number,exempt:boolean=false,imported:boolean=false) {
        this.fields = ['sku', 'description', 'price', 'exempt', 'imported']
    }

}

export default Product