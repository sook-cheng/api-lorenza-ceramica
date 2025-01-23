"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsSideNavsAlternative = exports.getAllProductsSideNavs = void 0;
const getAllProductsSideNavs = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value;
    try {
        const [rows, fields] = await connection.query('SELECT * FROM productsSideNavs ORDER BY mainSideNavId, sequence;');
        const mainCategories = rows.filter((x) => !x.mainSideNavId);
        value = mainCategories.map((x) => {
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
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getAllProductsSideNavs = getAllProductsSideNavs;
const getAllProductsSideNavsAlternative = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value;
    try {
        const [categories] = await connection.query('SELECT * FROM categories ORDER BY name');
        const [tags] = await connection.query('SELECT * FROM tags ORDER BY name');
        const [colors] = await connection.query('SELECT * FROM colors ORDER BY name');
        const [finishes] = await connection.query('SELECT * FROM finishes ORDER BY name');
        const [sizes] = await connection.query('SELECT * FROM sizes ORDER BY name');
        const mainCategories = categories.filter((x) => !x.mainCategoryId);
        const mainTags = tags.filter((x) => !x.mainTagId);
        const sideNavs = [
            {
                id: 1,
                label: 'Colors',
                route: '/products/colors',
                dbTable: 'colors',
                prds: colors.map((x) => {
                    return {
                        id: x.id,
                        label: x.name,
                        route: `/products/colors/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'colors',
                    };
                })
            },
            {
                id: 2,
                label: 'Finishes',
                route: '/products/finishes',
                dbTable: 'finishes',
                prds: finishes.map((x) => {
                    return {
                        id: x.id,
                        label: x.name,
                        route: `/products/finishes/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'finishes',
                    };
                })
            },
            {
                id: 3,
                label: 'Sizes',
                route: '/products/sizes',
                dbTable: 'sizes',
                prds: sizes.map((x) => {
                    return {
                        id: x.id,
                        label: x.value,
                        route: `/products/sizes/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                        dbTable: 'sizes',
                    };
                })
            },
            ...mainCategories.map((x) => {
                return {
                    id: x.id,
                    label: x.name,
                    route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                    dbTable: 'categories',
                    prds: categories.filter((y) => y.mainCategoryId === x.id).map((y) => {
                        return {
                            id: y.id,
                            label: y.name,
                            route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}/${y.name.replaceAll(' ', '-').toLowerCase()}`,
                            dbTable: 'categories',
                        };
                    }),
                };
            }),
            ...mainTags.map((x) => {
                return {
                    id: x.id,
                    label: x.name,
                    route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}`,
                    dbTable: 'tags',
                    prds: tags.filter((y) => y.mainTagId === x.id).map((y) => {
                        return {
                            id: y.id,
                            label: y.name,
                            route: `/products/${x.name.replaceAll(' ', '-').toLowerCase()}/${y.name.replaceAll(' ', '-').toLowerCase()}`,
                            dbTable: 'tags',
                        };
                    }),
                };
            })
        ];
        value = sideNavs.sort((a, b) => {
            if (a.label < b.label) {
                return -1;
            }
            if (a.label > b.label) {
                return 1;
            }
            return 0;
        });
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getAllProductsSideNavsAlternative = getAllProductsSideNavsAlternative;
//# sourceMappingURL=products-side-navs.js.map