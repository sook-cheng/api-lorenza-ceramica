"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutUs = void 0;
const getAboutUs = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT content FROM aboutUs ORDER BY id;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getAboutUs = getAboutUs;
//# sourceMappingURL=about-us.js.map