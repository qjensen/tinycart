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
const ConfigManager_1 = __importDefault(require("../src/ConfigManager"));
const promise_1 = __importDefault(require("mysql2/promise"));
class CartDb {
    constructor() {
        this.createConnection();
    }
    createConnection() {
        try {
            let config = ConfigManager_1.default.getConfig("mysql");
            this.connection = promise_1.default.createPool(config);
            this.connection.connect;
        }
        catch (err) {
            console.log(err);
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new CartDb();
        }
        return this.instance;
    }
    persist(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let table = entity.table;
            let fields = entity.fields;
            let columns = fields.join(', ');
            let props = fields.map((prop) => { return entity[prop] || null; });
            let placeholders = ("?,".repeat(fields.length)).slice(0, -1);
            let qry = `insert into ${table} (${columns}) values (${placeholders})`;
            let result = yield this.connection.execute(qry, props);
            let objResult = (JSON.parse(JSON.stringify(result)))[0];
            console.log(objResult);
            entity[entity.pk] = objResult.insertId;
            return entity;
        });
    }
    retrieveEntity(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.retrieve(entity);
        });
    }
    retrieve(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let qry = `SELECT * FROM ${entity.table} WHERE ${entity.pk} = ?`;
            let result = yield this.connection.execute(qry, [entity[entity.pk]]);
            let objResult = (JSON.parse(JSON.stringify(result)))[0][0];
            entity.fields.map((field) => entity[field] = objResult[field]);
            return entity;
            //console.log(entity)
        });
    }
}
exports.default = CartDb;
