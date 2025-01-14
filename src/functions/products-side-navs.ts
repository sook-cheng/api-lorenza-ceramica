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

export const getAllProductsSideNavsAlternative = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any;

    try{
        const [categories] = await connection.query('SELECT * FROM categories ORDER BY name');
        const [tags] = await connection.query('SELECT * FROM tags ORDER BY name');
        const [colors] = await connection.query('SELECT * FROM colors ORDER BY name');
        const [finishes] = await connection.query('SELECT * FROM finishes ORDER BY name');
        const [sizes] = await connection.query('SELECT * FROM sizes ORDER BY name');

        
        const mainCategories: any[] = categories.filter((x: any) => !x.mainCategoryId);
        const mainTags: any[] = tags.filter((x: any) => !x.mainTagId);
        const sideNavs = [
            {
                id: 1,
                label: 'Colors',
                route: '/products/colors',
                dbTable: 'colors',
                prds: colors.map((x: any) => {
                    return {
                        id: x.id,
                        label: x.name,
                        route: `/products/colors/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'colors',
                    }
                })
            },
            {
                id: 2,
                label: 'Finishes',
                route: '/products/finishes',
                dbTable: 'finishes',
                prds: finishes.map((x: any) => {
                    return {
                        id: x.id,
                        label: x.name,
                        route: `/products/finishes/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'finishes',
                    }
                })
            },
            {
                id: 3,
                label: 'Sizes',
                route: '/products/sizes',
                dbTable: 'sizes',
                prds: sizes.map((x: any) => {
                    return {
                        id: x.id,
                        label: x.value,
                        route: `/products/sizes/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'sizes',
                    }
                })
            },
            ...mainCategories.map((x: any) => {
                return {
                    id: x.id,
                    label: x.name,
                    route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                    dbTable: 'categories',
                    prds: categories.filter((y: any) => y.mainCategoryId === x.id).map((y: any) => {
                        return {
                            id: y.id,
                            label: y.name,
                            route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}/${y.name.replaceAll(' ', '-').toLowerCase()}`,
                            dbTable: 'categories',
                        }
                    }),
                }
            }),
            ...mainTags.map((x: any) => {
                return {
                    id: x.id,
                    label: x.name,
                    route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                    dbTable: 'tags',
                    prds: tags.filter((y: any) => y.mainTagId === x.id).map((y: any) => {
                        return {
                            id: y.id,
                            label: y.name,
                            route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}/${y.name.replaceAll(' ', '-').toLowerCase()}`,
                            dbTable: 'tags',
                        }
                    }),
                }
            })
        ]


        value = sideNavs;
    }
    finally{
        connection.release();
        return value;
    }
}