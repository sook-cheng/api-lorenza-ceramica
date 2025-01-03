import { FastifyInstance } from "fastify";
import { getAllCategories, getAllProducts, getAllProductsSideNavs, getFaqList, getInspirationList, getProductDetailsByCode, getProductsBySideNav, getProductsByTagName, getProjectCommercialList, getProjectResidentialList } from "../functions";

export async function routes(fastify: FastifyInstance) {
  // Add new routes here
  fastify.get("/faq", async (request, reply) => {
    return getFaqList();
  });

  fastify.get("/productsSideNavs", async (request, reply) => {
    return getAllProductsSideNavs(fastify);
  });

  fastify.get("/categories", async (request, reply) => {
    return getAllCategories(fastify);
  });

  fastify.get("/products", async (request, reply) => {
    return getAllProducts(fastify);
  });

  fastify.get("/products/:value", async (request, reply) => {
    const { value }: any = request.params;
    return getProductsBySideNav(fastify, value);
  });

  fastify.get("/productsByTagName/:value", async (request, reply) => {
    const { value }: any = request.params;
    return getProductsByTagName(fastify, value);
  });

  fastify.get("/product-details/:name/:code", async (request, reply) => {
    const { name, code }: any = request.params;
    return getProductDetailsByCode(fastify, name, code);
  });

  fastify.get("/inspirations", async (request, reply) => {
    return getInspirationList();
  });

  fastify.get("/projects-commercial", async (request, reply) => {
    return getProjectCommercialList();
  });

  fastify.get("/projects-residential", async (request, reply) => {
    return getProjectResidentialList();
  });
}
