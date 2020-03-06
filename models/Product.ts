class Product {

    public description:string
    public price:number
    public exempt:boolean
    public imported:boolean

    constructor(id:string,description:string,price:number,exempt:boolean=false,imported:boolean=false) {
        
    }
    
    retrieve(id:string,description:string,price:number,exempt:boolean=false,imported:boolean=false){

    }

    //if this were an enterprise app there would be an add/update method as well

}

export default Product