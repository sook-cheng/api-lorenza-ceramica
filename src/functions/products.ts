import { FastifyInstance } from "fastify";

export const getAllProducts = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM products ORDER BY id;');
    const [images, iFields] = await connection.query('SELECT * FROM productsImages ORDER BY productId;');
    connection.release();
    return rows.length > 0 ? rows.map((x: any) => {
        const imgs = images.filter((y: any) => y.productId === x.id);
        const imgList = imgs.length > 0 ? imgs.map((z: any) => formatImageUrl(z.productName, z.productCode, z.sequence, z.type)) : [];
        return {
            id: x.id,
            prdName: x.name,
            prdCode: x.code ?? '-',
            prdDesc: x.description,
            prdSize: x.size ?? '-',
            prdVariation: x.variation ?? '-',
            prdColor: x.color ?? '-',
            prdFinish: x.finish ?? '-',
            thickness: x.thickness ?? '-',
            images: imgList,
        }
    }) : [];
}

export const getProductsBySideNav = async (fastify: FastifyInstance, param: string) => {
    const connection = await fastify['mysql'].getConnection();
    const [sideNavRows, sideNavFields] = await connection.query(`SELECT * FROM productsSideNavs WHERE path LIKE \'%${param}\';`);
    const dbTable = sideNavRows[0].tableName;
    const sideNavName = sideNavRows[0].name;
    let query;
    switch (dbTable) {
        case 'tileTypes':
            query = `SELECT p.* FROM products p LEFT JOIN productsTileTypes pt ON p.id = pt.productId LEFT JOIN tileTypes t ON t.id = pt.tileTypeId WHERE t.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
        case 'tags':
            if (param === 'sales') {
                query = `SELECT p.* FROM products p LEFT JOIN productsTags pt ON p.id = pt.productId LEFT JOIN tags t1 ON t1.id = pt.tagId LEFT JOIN tags t2 ON t1.mainTagId = t2.id WHERE t2.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            }
            else query = `SELECT p.* FROM products p LEFT JOIN productsTags pt ON p.id = pt.productId LEFT JOIN tags t1 ON t1.id = pt.tagId WHERE t1.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
        case 'sizes':
            query = `SELECT p.* FROM products p LEFT JOIN productsSizes ps ON p.id = ps.productId LEFT JOIN sizes s ON s.id = ps.sizeId WHERE s.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
        case 'finishes':
            query = `SELECT p.* FROM products p LEFT JOIN productsFinishes pf ON p.id = pf.productId LEFT JOIN finishes f ON f.id = pf.finishId WHERE f.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
        case 'colors':
            query = `SELECT p.* FROM products p LEFT JOIN productsColors pc ON p.id = pc.productId LEFT JOIN colors c ON c.id = pc.colorId WHERE c.value = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
        case 'categories':
        default:
            query = `SELECT p.* FROM products p LEFT JOIN productsCategories pc ON p.id = pc.productId LEFT JOIN categories c1 ON c1.id = pc.categoryId WHERE c1.name = \'${sideNavName}\' ORDER BY p.id, p.name ASC;`;
            break;
    }

    // All products of Tiles
    if (param === 'all-products') {
        query = `SELECT p.* FROM products p LEFT JOIN productsCategories pc ON p.id = pc.productId LEFT JOIN categories c1 ON c1.id = pc.categoryId LEFT JOIN categories c2 ON c2.id = c1.mainCategoryId WHERE c2.name = \'Tiles\' ORDER BY p.id, p.name ASC;`;
    }

    const [rows, fields] = await connection.query(query);
    connection.release();

    if (rows.length > 0) {
        const productIds: number[] = rows.map((x: any) => x.id);
        let args = '';
        for (const id of productIds) {
            args = args.concat(`${id},`);
        }
        args = args.substring(0, args.length - 1);
        const [images, iFields] = await connection.query(`SELECT * FROM productsImages WHERE productId IN (${args}) ORDER BY productId;`);
        connection.release();
        return rows.map((x: any) => {
            const imgs = images.filter((y: any) => y.productId === x.id);
            const imgList = imgs.length > 0 ? imgs.map((z: any) => formatImageUrl(z.productName, z.productCode, z.sequence, z.type)) : [];
            return {
                id: x.id,
                prdName: x.name,
                prdCode: x.code ?? '-',
                prdDesc: x.description,
                prdSize: x.size ?? '-',
                prdVariation: x.variation ?? '-',
                prdColor: x.color ?? '-',
                prdFinish: x.finish ?? '-',
                thickness: x.thickness ?? '-',
                images: imgList,
            }
        });
    }
    else return [];
}

export const getProductsByTagName = async (fastify: FastifyInstance, param: string) => {
    const connection = await fastify['mysql'].getConnection();
    const query = `SELECT p.* FROM products p LEFT JOIN productsTags pt ON p.id = pt.productId LEFT JOIN tags t1 ON t1.id = pt.tagId WHERE t1.value = \'${param}\' ORDER BY p.id, p.name ASC;`;
    const [rows, fields] = await connection.query(query);
    connection.release();

    if (rows.length > 0) {
        const productIds: number[] = rows.map((x: any) => x.id);
        let args = '';
        for (const id of productIds) {
            args = args.concat(`${id},`);
        }
        args = args.substring(0, args.length - 1);
        const [images, iFields] = await connection.query(`SELECT * FROM productsImages WHERE productId IN (${args}) ORDER BY productId;`);
        connection.release();
        return rows.map((x: any) => {
            const imgs = images.filter((y: any) => y.productId === x.id);
            const imgList = imgs.length > 0 ? imgs.map((z: any) => formatImageUrl(z.productName, z.productCode, z.sequence, z.type)) : [];
            return {
                id: x.id,
                prdName: x.name,
                prdCode: x.code ?? '-',
                prdDesc: x.description,
                prdSize: x.size ?? '-',
                prdVariation: x.variation ?? '-',
                prdColor: x.color ?? '-',
                prdFinish: x.finish ?? '-',
                thickness: x.thickness ?? '-',
                images: imgList,
            }
        });
    }
    else return [];
}

export const formatImageUrl = (name: string, code: string, sequence: number, type: string) => {
    return `https://lorenzaceramica.com/images/products/${name}/${code}-${sequence}.${type}`;
}