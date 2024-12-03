"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDetailsByCode = void 0;
const products_1 = require("./products");
const getProductDetailsByCode = async (fastify, name, code) => {
    const connection = await fastify['mysql'].getConnection();
    let value;
    try {
        const [rows, fields] = await connection.query(`SELECT * FROM products WHERE name = \'${name}\' AND (code = \'${code}\' OR color = \'${code}\');`);
        const [images, iFields] = await connection.query(`SELECT * FROM productsImages WHERE productId = ${rows[0].id};`);
        const imgList = images.length > 0 ? images.map((z) => (0, products_1.formatImageUrl)(z.productName, z.productCode, z.sequence, z.type)) : [];
        value = {
            id: rows[0].id,
            prdName: rows[0].name,
            prdCode: rows[0].code ?? '-',
            prdDesc: rows[0].description,
            prdSize: rows[0].size ?? '-',
            prdVariation: rows[0].variation ?? '-',
            prdColor: rows[0].color ?? '-',
            prdFinish: rows[0].finish ?? '-',
            thickness: rows[0].thickness ?? '-',
            images: imgList,
        };
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProductDetailsByCode = getProductDetailsByCode;
//# sourceMappingURL=product-details.js.map