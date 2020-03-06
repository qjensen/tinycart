import express from "express";
import ConfigManager from "./ConfigManager";
import { CartRoutes } from "./CartRoutes"

export class App {
    public express
    public config
    public routes

    constructor() {
        this.express = express()
        this.config = new ConfigManager()
        this. routes = new CartRoutes()

        console.log(this.config)
    }
}

export default new App().express