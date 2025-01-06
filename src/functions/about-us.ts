import { FastifyInstance } from "fastify";

export const getAboutUs = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT content FROM aboutUs ORDER BY id;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
}