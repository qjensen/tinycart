import ConfigManager from "../src/ConfigManager"
import mysql from "mysql"

class DBConnection {
    static connection;

    public static getConnecction(){
        if(this.connection){
            return this.connection
        }
        else {
           let config = ConfigManager.getConfig("mysql")
           this.connection = mysql.createConnection(config)
        }
    }

    public static persist(entity){

    }

    public static retrieve(id) {
        
    }
}