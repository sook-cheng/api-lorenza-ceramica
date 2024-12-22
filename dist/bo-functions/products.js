"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignProductToTags = exports.assignProductToCategories = exports.addProducts = void 0;
/**
 *
 * @param fastify
 * @param data {
 *  id: number
 *  name: string
 *  code?: string
 *  description?: string
 *  variation?: string
 *  color?: string
 *  size?: string
 *  finish?: string
 *  thickness?: string
 *  createdAt: Date
 *  updatedAt: Date
 * }
 */
const addProducts = async (fastify, data) => {
    const connection = await fastify['mysql'].getConnection();
    let res;
    try {
        let sql = "INSERT INTO products (name,code,description,variation,color,size,finish,thickness) VALUES";
        sql += `('${data.name}','${data.code}','${data.description}','${data.variation}','${data.color}','${data.size}','${data.finish}','${data.thickness}');`;
        sql = sql.replaceAll("'null'", "null");
        // result
        // {
        //      fieldCount, affectedRows, insertId, info, serverStatus, warningStatus, changesRows
        // }
        const [result] = await connection.execute(sql);
        console.log("Inserted productId", result.insertId);
        if (data.color) {
            let cSql = "INSERT INTO productsColors (productId,colorId)";
            cSql += `SELECT p.id, c.id FROM products p, colors c WHERE p.name = \'${data.name}\' AND (p.code = \'${data.code}\' OR p.color = \'${data.color}\') AND c.name = '${data.color}';`;
            const [result] = await connection.execute(cSql);
        }
        if (data.size) {
            let sSql = "INSERT INTO productsSizes (productId,sizeId)";
            sSql += `SELECT p.id, s.id FROM products p, sizes s WHERE p.name = \'${data.name}\' AND (p.code = \'${data.code}\' OR p.color = \'${data.color}\') AND s.value = '${data.size}';`;
            const [result] = await connection.execute(sSql);
        }
        if (data.finish) {
            let fSql = "INSERT INTO productsFinishes (productId,finishId)";
            fSql += `SELECT p.id, f.id FROM products p, finishes f WHERE p.name = \'${data.name}\' AND (p.code = \'${data.code}\' OR p.color = \'${data.color}\') AND f.name = '${data.finish}';`;
            const [result] = await connection.execute(fSql);
        }
        res = result?.insertId ? 200 : 500;
    }
    catch (err) {
        console.log(err);
        res = 500;
    }
    finally {
        connection.release();
        return res;
    }
};
exports.addProducts = addProducts;
const assignProductToCategories = async (fastify, data) => {
    const connection = await fastify['mysql'].getConnection();
    try {
        let args = '';
        for (const id of data.categories) {
            args = args.concat(`${id},`);
        }
        let sql = "INSERT INTO productsCategories (productId,categoryId)";
        sql += `SELECT ${data.productId}, c.id FROM categories c WHERE c.id IN (${args});`;
        const [result] = await connection.execute(sql);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        connection.release();
    }
};
exports.assignProductToCategories = assignProductToCategories;
const assignProductToTags = async (fastify, data) => {
    const connection = await fastify['mysql'].getConnection();
    try {
        let args = '';
        for (const id of data.tags) {
            args = args.concat(`${id},`);
        }
        let sql = "INSERT INTO productsTags (productId,tagId)";
        sql += `SELECT ${data.productId}, t.id FROM tags t WHERE t.id IN (${args});`;
        const [result] = await connection.execute(sql);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        connection.release();
    }
};
exports.assignProductToTags = assignProductToTags;
//# sourceMappingURL=products.js.map