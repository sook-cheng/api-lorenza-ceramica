import { FastifyInstance } from "fastify";

export const getAllProductsSideNavs = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM productsSideNavs ORDER BY mainSideNavId, sequence;');
    connection.release();
    const mainCategories: any[] = rows.filter((x: any) => !x.mainSideNavId);
    const res = mainCategories.map((x: any) => {
        return {
            id: x.id,
            label: x.name,
            route: `/products${x.path}`,
            dbTable: x.tableName,
            prds: rows.filter((y: any) => y.mainSideNavId === x.id).map((y: any) => {
                return {
                    id: y.id,
                    label: y.name,
                    route: `/products${y.path}`,
                    dbTable: y.tableName,
                }
            }),
        }

    })
    return res;
}