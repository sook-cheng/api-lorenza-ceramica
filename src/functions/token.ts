import { FastifyInstance } from "fastify";

/**
 * 
 * @param fastify 
 * @returns {
 *  name: number,
 *  value: string,
 * }
*/
export const getToken = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query('SELECT name, value FROM tokens');
        value = rows;
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
 *  name: string
 * }
 * @returns {
 *  code: number,
 *  message: string,
 * }
*/
export const updateToken = async (fastify: FastifyInstance, data: any) => {
    const connection = await fastify['mysql'].getConnection();
    let res: { code: number, message: string } = { code: 200, message: "OK." };

    try {
        const [result] = await connection.execute('UPDATE tokens SET value=? WHERE name=?',
            [data.value, data.name]);

        res = result?.affectedRows > 0 ? {
            code: 204,
            message: `${data.name} updated.`
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