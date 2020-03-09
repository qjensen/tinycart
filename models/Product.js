"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(apiProduct) {
        this.table = 'products';
        this.pk = 'sku';
        this.fields = ['sku', 'description', 'price', 'exempt', 'imported'];
        //now assign the attribute values
        this.sku = apiProduct.sku;
        this.description = apiProduct.description;
        this.price = apiProduct.price;
        this.exempt = apiProduct.exempt;
        this.imported = apiProduct.imported;
    }
}
exports.default = Product;
