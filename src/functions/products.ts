import { FastifyInstance } from "fastify";

export const getAllProducts = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM products;');
    connection.release();
    return rows;
}