"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDetailsByCode = void 0;
const getProductDetailsByCode = async (fastify, name, code) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query(`SELECT * FROM products WHERE name = \'${name}\' AND (code = \'${code}\' OR color = \'${code}\') ORDER BY id, name ASC;`);
    connection.release();
    return {
        id: rows[0].id,
        prdName: rows[0].name,
        prdCode: rows[0].code ?? '-',
        prdDesc: rows[0].description,
        prdSize: rows[0].size ?? '-',
        prdVariation: rows[0].variation ?? '-',
        prdColor: rows[0].color ?? '-',
        prdFinish: rows[0].finish ?? '-',
        thickness: rows[0].thickness ?? '-'
    };
};
exports.getProductDetailsByCode = getProductDetailsByCode;
//# sourceMappingURL=product-details.js.map