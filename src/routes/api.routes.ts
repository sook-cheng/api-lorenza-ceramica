import { FastifyInstance } from "fastify";
import { getAboutUs, getAllCategories, getAllProducts, getAllProductsSideNavs, getAllProductsSideNavsAlternative, getCompanyInfo, getFaqList, getHomeBanners, getHomePartners, getInspirationByPath, getInspirationList, getProductDetailsByCode, getProductsByDbTable, getProductsBySideNav, getProductsByTagName, getProjectCommercialByPath, getProjectCommercialList, getProjectResidentialByPath, getProjectResidentialList } from "../functions";

export async function routes(fastify: FastifyInstance) {
  // Add new routes here
  fastify.get("/about-us", async (request, reply) => {
    return getAboutUs(fastify);
  });

  fastify.get("/company-info", async (request, reply) => {
    return getCompanyInfo(fastify);
  });

  fastify.get("/faq", async (request, reply) => {
    return getFaqList(fastify);
  });

  fastify.get("/productsSideNavs", async (request, reply) => {
    return getAllProductsSideNavs(fastify);
  });

  fastify.get("/productsSideNavsAlternative", async (request, reply) => {
    return getAllProductsSideNavsAlternative(fastify);
  });

  fastify.get("/categories", async (request, reply) => {
    return getAllCategories(fastify);
  });

  fastify.get("/home-banners", async (request, reply) => {
    return getHomeBanners(fastify);
  });

  fastify.get("/home-partners", async (request, reply) => {
    return getHomePartners(fastify);
  });

  fastify.get("/products", async (request, reply) => {
    return getAllProducts(fastify);
  });

  fastify.get("/products/:value", async (request, reply) => {
    const { value }: any = request.params;
    return getProductsBySideNav(fastify, value);
  });

  fastify.get("/products/:table/:value", async (request, reply) => {
    const { table, value }: any = request.params;
    return getProductsByDbTable(fastify, table, value);
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
    return getInspirationList(fastify);
  });

  fastify.get("/projects-commercial", async (request, reply) => {
    return getProjectCommercialList(fastify);
  });

  fastify.get("/projects-residential", async (request, reply) => {
    return getProjectResidentialList(fastify);
  });

  fastify.get("/inspirations/:path", async (request, reply) => {
    const { path }: any = request.params;
    return getInspirationByPath(fastify, path);
  });

  fastify.get("/projects-commercial/:path", async (request, reply) => {
    const { path }: any = request.params;
    return getProjectCommercialByPath(fastify, path);
  });

  fastify.get("/projects-residential/:path", async (request, reply) => {
    const { path }: any = request.params;
    return getProjectResidentialByPath(fastify, path);
  });
}
