"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectResidentialByPath = exports.getProjectCommercialByPath = exports.getProjectResidentialList = exports.getProjectCommercialList = void 0;
const getProjectCommercialList = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials ORDER BY id DESC`);
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
        const [rows] = await connection.query(`SELECT * FROM projectResidentials ORDER BY id DESC`);
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProjectResidentialList = getProjectResidentialList;
const getProjectCommercialByPath = async (fastify, path) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM projectCommercials WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProjectCommercialByPath = getProjectCommercialByPath;
const getProjectResidentialByPath = async (fastify, path) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM projectResidentials WHERE path=?`, [path]);
        value = rows[0];
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getProjectResidentialByPath = getProjectResidentialByPath;
//# sourceMappingURL=projects.js.map