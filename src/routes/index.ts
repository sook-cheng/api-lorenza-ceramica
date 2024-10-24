import { FastifyInstance } from "fastify";
import { getFaqList } from "../functions";

export async function routes(fastify: FastifyInstance) {
  // Add new routes here
  fastify.get("/faq", async (request, reply) => {
    return getFaqList();
  });
}
