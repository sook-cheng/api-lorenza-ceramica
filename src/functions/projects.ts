import { FastifyInstance } from "fastify";

export const getProjectCommercialList = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials ORDER BY id DESC`);
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
        const [rows] = await connection.query(`SELECT * FROM projectResidentials ORDER BY id DESC`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
}

export const getProjectCommercialByPath = async (fastify: FastifyInstance, path: string) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
}

export const getProjectResidentialByPath = async (fastify: FastifyInstance, path: string) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT * FROM projectResidentials WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
}