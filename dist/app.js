"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/product/product.route");
const order_routes_1 = require("./modules/order/order.routes");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
//application route
app.use("/api/products", product_route_1.ProductRoutes);
app.use("/api/orders", order_routes_1.OrderRoutes);
app.get("/", (req, res) => {
    res.send("Hello Shuvo");
});
exports.default = app;
