"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigManager_1 = __importDefault(require("../src/ConfigManager"));
const mysql_1 = __importDefault(require("mysql"));
class DBConnection {
    static getConnection() {
        if (this.connection) {
            return this.connection;
        }
        else {
            let config = ConfigManager_1.default.getConfig("mysql");
            this.connection = mysql_1.default.createConnection(config);
            try {
                this.connection.connect;
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    static persist(entity) {
        let dbName = entity.dbName;
        let fields = entity.fields;
        let columns = fields.join(', ');
        let props = fields.map((cur) => { return entity[cur]; });
        let colVals = props.join(', ');
        let pk = entity[entity.pk];
        let qry = "insert into ${dbName} ${columns} values (${colVals}) on duplicate key update values (${pk}, ${colVals})";
        this.connection.query(qry);
    }
    static retrieve(id) {
    }
}
exports.default = DBConnection;
