"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = void 0;
const getAllCategories = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM categories');
    connection.release();
    return rows;
};
exports.getAllCategories = getAllCategories;
//# sourceMappingURL=categories.js.map