"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_config_json_1 = __importDefault(require("../cart-config.json"));
class ConfigManager {
    static getConfig(section) {
        return cart_config_json_1.default[section];
    }
}
__export(require("./ConfigManager"));
exports.default = ConfigManager;
