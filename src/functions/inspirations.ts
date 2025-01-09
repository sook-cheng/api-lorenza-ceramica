import { FastifyInstance } from "fastify";

export const getInspirationList = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM inspirations ORDER BY id DESC`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
}

export const getInspirationByPath = async (fastify: FastifyInstance, path: string) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM inspirations WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
}