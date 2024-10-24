"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const functions_1 = require("../functions");
async function routes(fastify) {
    // Add new routes here
    fastify.get("/faq", async (request, reply) => {
        return (0, functions_1.getFaqList)();
    });
}
//# sourceMappingURL=index.js.map