"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInstagramToken = exports.getInstagramToken = void 0;
/**
 *
 * @param fastify
 * @returns {
 *  name: number,
 *  value: string,
 * }
*/
const getInstagramToken = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query('SELECT name, value FROM tokens WHERE name=?', ['INSTAGRAM_TOKEN']);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getInstagramToken = getInstagramToken;
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
const updateInstagramToken = async (fastify, data) => {
    const connection = await fastify['mysql'].getConnection();
    let res = { code: 200, message: "OK." };
    try {
        const [result] = await connection.execute('UPDATE tokens SET value=? WHERE name=?', [data.value, 'INSTAGRAM_TOKEN']);
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
};
exports.updateInstagramToken = updateInstagramToken;
//# sourceMappingURL=token.js.map