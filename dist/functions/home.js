"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePartners = exports.getHomeBanners = exports.getCompanyInfo = void 0;
const getCompanyInfo = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query('SELECT `key`, value FROM companyInformation;');
        value = rows;
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getCompanyInfo = getCompanyInfo;
const getHomeBanners = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT * FROM homeBanners ORDER BY sequence;`);
        value = rows.map((x) => {
            return {
                id: x.id,
                imageUrl: x.imageUrl,
                mobileImageUrl: x.mobileImageUrl,
                alt: x.name,
                title: x.name,
                link: x.link
            };
        });
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getHomeBanners = getHomeBanners;
const getHomePartners = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [rows] = await connection.query(`SELECT id, name, imageUrl FROM homePartners ORDER BY sequence;`);
        value = rows.map((x) => {
            return {
                id: x.id,
                itemImageSrc: x.imageUrl,
                alt: x.name,
                title: x.name,
                divClassName: x.name === 'White Horse' || x.name === 'Suzuka'
                    ? 'div-img-square'
                    : null,
                className: x.name === 'White Horse' || x.name === 'Suzuka'
                    ? 'img-square-1'
                    : null,
            };
        });
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getHomePartners = getHomePartners;
//# sourceMappingURL=home.js.map