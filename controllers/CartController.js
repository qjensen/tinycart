"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartDb_1 = __importDefault(require("../db/CartDb"));
const Cart_1 = __importDefault(require("../models/Cart"));
const LineItem_1 = __importDefault(require("../models/LineItem"));
const Product_1 = __importDefault(require("../models/Product"));
class CartController {
    constructor() {
        this.db = CartDb_1.default.getInstance();
    }
    newCart() {
        return __awaiter(this, void 0, void 0, function* () {
            let c = new Cart_1.default();
            let p = yield this.db.persist(c);
            return yield p;
        });
    }
    loadProduct(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = new Product_1.default({ "sku": item.sku, "description": null, "price": null, "exempt": null, "imported": null });
            let p = yield this.db.retrieve(product);
            return yield p;
        });
    }
    createLineItem(product, cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            let itemInfo = { "product": product };
            let lineItem = new LineItem_1.default(itemInfo);
            lineItem.cartId = this.cart.cart_id;
            console.log(this.cart);
            let l = this.db.persist(lineItem);
            return yield l;
        });
    }
    addLineItems(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cart = yield this.newCart();
            //console.log(this.cart)
            let apiItems = request.body.lineItems;
            apiItems.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                let product = yield this.loadProduct(item);
                let lineItem = yield this.createLineItem(product, this.cart.id);
                //console.log(lineItem)
            }));
            response.send("fin");
        });
    }
    addItems(req, response) {
        let cartId = req.body.cartId;
        if (cartId == null) {
            let cp = this.newCart();
            cp.then((cart) => {
                console.log(cart);
                this.cart = cart;
            });
            //console.log(this.cart)
        }
        let apiItems = req.body.lineItems;
        apiItems.forEach(item => {
            let product = new Product_1.default({ "sku": item.sku, "description": null, "price": null, "exempt": null, "imported": null });
            const prodPromise = this.db.retrieve(product);
            prodPromise.then((prod) => {
                let itemInfo = { product: null };
                let lineItem = new LineItem_1.default(itemInfo.product = prod);
                //lineItem.cartId = this.cart.cartId
                //console.log(lineItem)
                //let itemPromise = this.db.persist(lineItem)
                //itemPromise.then((lineItem)=>{
                //console.log("Created Line Item")
                //})
            });
        });
        response.send(cartId);
    }
}
exports.default = CartController;
