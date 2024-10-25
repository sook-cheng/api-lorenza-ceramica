"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const functions_1 = require("../functions");
async function routes(fastify) {
    // Add new routes here
    fastify.get("/faq", async (request, reply) => {
        return (0, functions_1.getFaqList)();
    });
    fastify.get("/categories", async (request, reply) => {
        return (0, functions_1.getAllCategories)(fastify);
    });
    fastify.get("/products", async (request, reply) => {
        return (0, functions_1.getAllProducts)(fastify);
    });
    fastify.get("/product-details/:code", async (request, reply) => {
        const { code } = request.params;
        return (0, functions_1.getProductDetailsByCode)(code);
    });
}
//# sourceMappingURL=index.js.map