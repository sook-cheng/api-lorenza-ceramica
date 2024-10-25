"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const getAllProducts = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM products;');
    connection.release();
    return rows;
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.js.map