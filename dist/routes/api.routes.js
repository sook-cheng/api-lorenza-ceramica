"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const functions_1 = require("../functions");
async function routes(fastify) {
    // Add new routes here
    fastify.get("/about-us", async (request, reply) => {
        return (0, functions_1.getAboutUs)(fastify);
    });
    fastify.get("/company-info", async (request, reply) => {
        return (0, functions_1.getCompanyInfo)(fastify);
    });
    fastify.get("/faq", async (request, reply) => {
        return (0, functions_1.getFaqList)(fastify);
    });
    fastify.get("/productsSideNavs", async (request, reply) => {
        return (0, functions_1.getAllProductsSideNavs)(fastify);
    });
    fastify.get("/productsSideNavsAlternative", async (request, reply) => {
        return (0, functions_1.getAllProductsSideNavsAlternative)(fastify);
    });
    fastify.get("/categories", async (request, reply) => {
        return (0, functions_1.getAllCategories)(fastify);
    });
    fastify.get("/home-banners", async (request, reply) => {
        return (0, functions_1.getHomeBanners)(fastify);
    });
    fastify.get("/home-partners", async (request, reply) => {
        return (0, functions_1.getHomePartners)(fastify);
    });
    fastify.get("/products", async (request, reply) => {
        return (0, functions_1.getAllProducts)(fastify);
    });
    fastify.get("/products/:value", async (request, reply) => {
        const { value } = request.params;
        return (0, functions_1.getProductsBySideNav)(fastify, value);
    });
    fastify.get("/products/:table/:value", async (request, reply) => {
        const { table, value } = request.params;
        return (0, functions_1.getProductsByDbTable)(fastify, table, value);
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
        return (0, functions_1.getInspirationList)(fastify);
    });
    fastify.get("/projects-commercial", async (request, reply) => {
        return (0, functions_1.getProjectCommercialList)(fastify);
    });
    fastify.get("/projects-residential", async (request, reply) => {
        return (0, functions_1.getProjectResidentialList)(fastify);
    });
    fastify.get("/inspirations/:path", async (request, reply) => {
        const { path } = request.params;
        return (0, functions_1.getInspirationByPath)(fastify, path);
    });
    fastify.get("/projects-commercial/:path", async (request, reply) => {
        const { path } = request.params;
        return (0, functions_1.getProjectCommercialByPath)(fastify, path);
    });
    fastify.get("/projects-residential/:path", async (request, reply) => {
        const { path } = request.params;
        return (0, functions_1.getProjectResidentialByPath)(fastify, path);
    });
}
//# sourceMappingURL=api.routes.js.map