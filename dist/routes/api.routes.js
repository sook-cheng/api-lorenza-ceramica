"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const functions_1 = require("../functions");
async function routes(fastify) {
    // Add new routes here
    fastify.get("/faq", async (request, reply) => {
        return (0, functions_1.getFaqList)();
    });
    fastify.get("/productsSideNavs", async (request, reply) => {
        return (0, functions_1.getAllProductsSideNavs)(fastify);
    });
    fastify.get("/categories", async (request, reply) => {
        return (0, functions_1.getAllCategories)(fastify);
    });
    fastify.get("/products", async (request, reply) => {
        return (0, functions_1.getAllProducts)(fastify);
    });
    fastify.get("/products/:value", async (request, reply) => {
        const { value } = request.params;
        return (0, functions_1.getProductsBySideNav)(fastify, value);
    });
    fastify.get("/productsByTagName/:value", async (request, reply) => {
        const { value } = request.params;
        return (0, functions_1.getProductsByTagName)(fastify, value);
    });
    fastify.get("/product-details/:name/:code", async (request, reply) => {
        const { name, code } = request.params;
        return (0, functions_1.getProductDetailsByCode)(fastify, name, code);
    });
    fastify.get("/inspirations", async (request, reply) => {
        return (0, functions_1.getInspirationList)();
    });
    fastify.get("/projects-commercial", async (request, reply) => {
        return (0, functions_1.getProjectCommercialList)();
    });
    fastify.get("/projects-residential", async (request, reply) => {
        return (0, functions_1.getProjectResidentialList)();
    });
}
//# sourceMappingURL=api.routes.js.map