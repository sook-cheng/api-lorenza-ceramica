"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boFunctionsRoutes = boFunctionsRoutes;
const bo_functions_1 = require("../bo-functions");
const stream_1 = require("stream");
const node_fs_1 = __importDefault(require("node:fs"));
const imagesFolder = '/home/lorenzac/public_html/images';
async function boFunctionsRoutes(fastify) {
    fastify.post("/add-products", async (request, reply) => {
        const result = await (0, bo_functions_1.addProducts)(fastify, request.body);
        reply.code(result);
    });
    fastify.post("/upload-products-images", async (request, reply) => {
        const images = request.files();
        let data = request.body;
        const imgs = [];
        for await (const i of images) {
            if (i.type === 'file') {
                const type = i.filename.split('.');
                const seq = type[0].split('-');
                (0, stream_1.pipeline)(i.file, node_fs_1.default.createWriteStream(`${imagesFolder}/products/${data.name}/${i.filename}`));
                imgs.push({
                    sequence: seq[seq.length - 1],
                    type: type[type.length - 1],
                });
            }
        }
        // TODO: Insert data into productsImages
        // INSERT INTO `productsImages` (productId, productName, productCode, sequence, type)
        // SELECT id, name, code, `${seq}`, `${type}` FROM products WHERE name = 'data.name' AND code = 'data.code';
        reply.code(200);
    });
}
//# sourceMappingURL=bo-api.routes.js.map