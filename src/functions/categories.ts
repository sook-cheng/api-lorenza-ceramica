import { FastifyInstance } from "fastify";

export const getAllCategories = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM categories');
    connection.release();
    return rows;
}