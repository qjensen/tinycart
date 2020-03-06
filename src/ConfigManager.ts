import Config from "../cart-config.json"

class ConfigManager {
    static getConfig(section: string) {
        return Config[section];
    }
}

export * from "./ConfigManager"
export default ConfigManager