import { FastifyInstance } from "fastify";

export const getAllProductsSideNavs = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any;

    try{
        const [rows, fields] = await connection.query('SELECT * FROM productsSideNavs ORDER BY mainSideNavId, sequence;');
        const mainCategories: any[] = rows.filter((x: any) => !x.mainSideNavId);
        value = mainCategories.map((x: any) => {
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
        });
    }
    finally{
        connection.release();
        return value;
    }
}