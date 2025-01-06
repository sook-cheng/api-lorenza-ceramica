"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectResidentialList = exports.getProjectCommercialList = void 0;
const getProjectCommercialList = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProjectCommercialList = getProjectCommercialList;
const getProjectResidentialList = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM projectResidentials;`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProjectResidentialList = getProjectResidentialList;
//# sourceMappingURL=projects.js.map