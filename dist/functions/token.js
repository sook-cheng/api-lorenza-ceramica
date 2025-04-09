"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToken = exports.getToken = void 0;
/**
 *
 * @param fastify
 * @returns {
 *  name: number,
 *  value: string,
 * }
*/
const getToken = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query('SELECT name, value FROM tokens');
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getToken = getToken;
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
const updateToken = async (fastify, data) => {
    const connection = await fastify['mysql'].getConnection();
    let res = { code: 200, message: "OK." };
    try {
        const [result] = await connection.execute('UPDATE tokens SET value=? WHERE name=?', [data.value, data.name]);
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
};
exports.updateToken = updateToken;
//# sourceMappingURL=token.js.map