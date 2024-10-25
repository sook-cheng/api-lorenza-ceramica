import { FastifyInstance } from "fastify";
import { getAllCategories, getAllProducts, getFaqList, getProductDetailsByCode } from "../functions";

export async function routes(fastify: FastifyInstance) {
  // Add new routes here
  fastify.get("/faq", async (request, reply) => {
    return getFaqList();
  });

  fastify.get("/categories", async (request, reply) => {
    return getAllCategories(fastify);
  });

  fastify.get("/products", async (request, reply) => {
    return getAllProducts(fastify);
  });

  fastify.get("/product-details/:code", async (request, reply) => {
    const { code }: any = request.params;
    return getProductDetailsByCode(code);
  });
}
