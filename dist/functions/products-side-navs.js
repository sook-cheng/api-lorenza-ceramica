"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsSideNavs = void 0;
const getAllProductsSideNavs = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM productsSideNavs ORDER BY mainSideNavId, sequence;');
    connection.release();
    const mainCategories = rows.filter((x) => !x.mainSideNavId);
    const res = mainCategories.map((x) => {
        return {
            id: x.id,
            label: x.name,
            route: `/products${x.path}`,
            dbTable: x.tableName,
            prds: rows.filter((y) => y.mainSideNavId === x.id).map((y) => {
                return {
                    id: y.id,
                    label: y.name,
                    route: `/products${y.path}`,
                    dbTable: y.tableName,
                };
            }),
        };
    });
    return res;
};
exports.getAllProductsSideNavs = getAllProductsSideNavs;
//# sourceMappingURL=products-side-navs.js.map