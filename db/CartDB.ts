import ConfigManager from "../src/ConfigManager"
import mysql from "mysql2/promise"
import { json } from "express";

class CartDb {
    private static instance: CartDb;
    private connection;

    private constructor() {
        this.createConnection();
    }

    private createConnection(){
        try{
            let config = ConfigManager.getConfig("mysql")
            this.connection = mysql.createPool(config)
            this.connection.connect
        }
        catch(err) {
            console.log(err)
        } 
    }

    public static getInstance(): CartDb {
        if(!this.instance){
            this.instance = new CartDb()
        }
        return this.instance
    }

    async persist(entity){
        let table = entity.table
        let fields = entity.fields
        let columns = fields.join(', ')
        let props = fields.map((prop)=>{return entity[prop]||null})
        let placeholders = ("?,".repeat(fields.length)).slice(0, -1)
        let qry=`insert into ${table} (${columns}) values (${placeholders})`
        let result = await this.connection.execute(qry, props)
        let objResult = (JSON.parse(JSON.stringify(result)))[0]
        console.log(objResult)
        entity[entity.pk] = objResult.insertId
        return entity
    }

    async retrieveEntity(entity) {
       await this.retrieve(entity)
    } 

    async retrieve(entity) {
        let qry = `SELECT * FROM ${entity.table} WHERE ${entity.pk} = ?` 
        let result = await this.connection.execute(qry, [entity[entity.pk]])
        let objResult = (JSON.parse(JSON.stringify(result)))[0][0]
        entity.fields.map((field)=>entity[field] = objResult[field])
        return entity
        //console.log(entity)
    }
}

export default CartDb