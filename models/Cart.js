"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.items = [];
        this.table = "cart";
        this.pk = "cart_id";
        this.fields = ["cart_id", "date_created"];
    }
    addItem(item) {
    }
    removeItem(item) {
    }
    save() {
    }
    getTotals() {
    }
}
exports.default = Cart;
