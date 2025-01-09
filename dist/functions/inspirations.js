"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInspirationByPath = exports.getInspirationList = void 0;
const getInspirationList = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM inspirations;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getInspirationList = getInspirationList;
const getInspirationByPath = async (fastify, path) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM inspirations WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getInspirationByPath = getInspirationByPath;
//# sourceMappingURL=inspirations.js.map