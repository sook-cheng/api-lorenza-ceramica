import { FastifyInstance } from "fastify";

export const getHomePartners = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [rows] = await connection.query(`SELECT id, name, imageUrl FROM homePartners ORDER BY sequence;`);
        value = rows.map((x: any) => {
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
            }
        });
    }
    finally {
        connection.release();
        return value;
    }
}