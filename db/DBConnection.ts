import ConfigManager from "../src/ConfigManager"
import mysql from "mysql"

class CartDb {
    private static instance: CartDb;
    private connection;

    private constructor() {
        let config = ConfigManager.getConfig("mysql")
        this.connection = mysql.createConnection(config)
        try{
         this.connection.connect
        }
        catch(err){
            console.log(err)
        }
    }

    public static getInstance() {
        if(!this.instance){
            this.instance = new CartDb()
        }
        return this.instance
    }

    public persist(entity){
        let dbName = entity.dbName
        let fields = entity.fields
        let columns = fields.join(', ')
        let props = fields.map((cur)=>{return entity[cur]})
        let colVals = props.join(', ')
        let pk = entity[entity.pk]
        let qry="insert into ${dbName} ${columns} values (${colVals}) on duplicate key update values (${pk}, ${colVals})"
        this.connection.query(qry);
    }

    public static retrieve(id) {
        
    }
}

export default DBConnection