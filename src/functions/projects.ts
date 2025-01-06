import { FastifyInstance } from "fastify";

export const getProjectCommercialList = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
}

export const getProjectResidentialList = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM projectResidentials;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
}