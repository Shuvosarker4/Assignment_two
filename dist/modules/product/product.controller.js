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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const zodParsedData = product_validation_1.default.parse(productData);
    // console.log(zodParsedData);
    const result = yield product_service_1.ProductService.createProduct(zodParsedData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});
//get product
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProduct();
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            error: err,
        });
    }
});
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getAProduct(productId);
        res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "something went wrong",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.ProductService.deleteProduct(productId);
    res.json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
    });
});
// const updateAProduct = async (req: Request, res: Response) => {
//   const { productId } = req.params;
//   const { data } = req.body;
//   console.log(data);
//   const result = await ProductService.updateAProduct(productId, data);
//   res.json({
//     success: true,
//     message: "Product fetched successfully!",
//     data: result,
//   });
// };
exports.ProductController = {
    createProduct,
    getAllProduct,
    getAProduct,
    deleteProduct,
    // updateAProduct,
};
