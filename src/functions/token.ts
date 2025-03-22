import { FastifyInstance } from "fastify";

/**
 * 
 * @param fastify 
 * @returns {
 *  name: number,
 *  value: string,
 * }
*/
export const getInstagramToken = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query('SELECT name, value FROM tokens WHERE name=?', ['INSTAGRAM_TOKEN']);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
}

/**
 * 
 * @param fastify 
 * @param data { 
 *  value: string
 * }
 * @returns {
 *  code: number,
 *  message: string,
 * }
*/
export const updateInstagramToken = async (fastify: FastifyInstance, data: any) => {
    const connection = await fastify['mysql'].getConnection();
    let res: { code: number, message: string } = { code: 200, message: "OK." };

    try {
        const [result] = await connection.execute('UPDATE tokens SET value=? WHERE name=?',
            [data.value, 'INSTAGRAM_TOKEN']);

        res = result?.affectedRows > 0 ? {
            code: 204,
            message: `Instagram token updated.`
        } : {
            code: 500,
            message: "Internal Server Error."
        };
    }
    catch (err) {
        console.error(err);
        res = {
            code: 500,
            message: "Internal Server Error."
        };
    }
    finally {
        connection.release();
        return res;
    }
}