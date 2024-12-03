import { FastifyInstance } from "fastify";

export const getAllCategories = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any;
    
    try{
        const [rows, fields] = await connection.query('SELECT * FROM categories');
        value = rows;
    }
    finally{
        connection.release();
        return value;
    }
}