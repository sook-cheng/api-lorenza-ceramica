import { FastifyInstance } from "fastify";
import {
  products,
  categories,
  mainProductsSideNavs,
  subProductsSideNavs,
  tags,
  sizes,
  colors,
  finishes,
  tileTypes,
  productsTags,
  productsTagsWithoutCode,
  addProducts1,
  addProductsTags1,
  productsTagsSales
} from "../data";

export async function dataCreationRoutes(fastify: FastifyInstance) {
  fastify.get("/create-products", async (request, reply) => {
    let sql =
      "INSERT INTO products (name,code,description,variation,color,size,finish,thickness) VALUES";
    for (const p of addProducts1) {
      sql += `('${p.name}','${p.code}','${p.description}','${p.variation}','${p.color}','${p.size}','${p.finish}','${p.thickness}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-categories", async (request, reply) => {
    let sql = "INSERT INTO categories (name,description,mainCategoryId) VALUES";
    for (const p of categories) {
      sql += `('${p.name}','${p.description}','${p.mainCategoryId}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-mainProductsSideNavs", async (request, reply) => {
    let sql =
      "INSERT INTO productsSideNavs (name,path,tableName,sequence,mainSideNavId) VALUES";
    for (const p of mainProductsSideNavs) {
      sql += `('${p.name}','${p.path}','${p.tableName}',${p.sequence},'${p.mainSideNavId}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-subProductsSideNavs", async (request, reply) => {
    let sql =
      "INSERT INTO productsSideNavs (name,path,tableName,sequence,mainSideNavId) VALUES";
    for (const p of subProductsSideNavs) {
      sql += `('${p.name}','${p.path}','${p.tableName}',${p.sequence},'${p.mainSideNavId}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-tags", async (request, reply) => {
    let sql = "INSERT INTO tags (name,value,mainTagId) VALUES";
    for (const p of tags) {
      sql += `('${p.name}','${p.value}','${p.mainTagId}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-sizes", async (request, reply) => {
    let sql = "INSERT INTO sizes (name,value) VALUES";
    for (const p of sizes) {
      sql += `('${p.name}','${p.value}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-colors", async (request, reply) => {
    let sql = "INSERT INTO colors (name,value) VALUES";
    for (const p of colors) {
      sql += `('${p.name}','${p.value}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-finishes", async (request, reply) => {
    let sql = "INSERT INTO finishes (name,value) VALUES";
    for (const p of finishes) {
      sql += `('${p.name}','${p.value}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-tileTypes", async (request, reply) => {
    let sql = "INSERT INTO tileTypes (name,value) VALUES";
    for (const p of tileTypes) {
      sql += `('${p.name}','${p.value}'),`;
    }
    sql = sql.replaceAll("'null'", "null");
    return sql.substring(0, sql.length - 1) + ";";
  });

  fastify.get("/create-productsSizes", async (request, reply) => {
    let sql;
    for (const p of sizes) {
        if (p.name === 'misc') {
            sql += "\nINSERT INTO productsSizes (productId,sizeId) ";
            sql += `SELECT p.id, s.id FROM products p, sizes s WHERE p.name IN ('Casa Tiles', 'Lampang Tiles', 'Turkish Tiles', 'Insert Tiles', 'Spain Handmade') AND s.name = '${p.name}';`;
        }
        else {
            sql += "\nINSERT INTO productsSizes (productId,sizeId) ";
            sql += `SELECT p.id, s.id FROM products p, sizes s WHERE p.size = '${p.value === '600 x 600 x 10mm' ? '600 x 600mm' : p.value}' AND s.name = '${p.name}';`;
        }
    }
    return sql;
  });

  fastify.get("/create-productsColors", async (request, reply) => {
    let sql;
    for (const p of colors) {
        sql += "\nINSERT INTO productsColors (productId,colorId) ";
        sql += `SELECT p.id, c.id FROM products p, colors c WHERE p.color LIKE '%${p.name}%' AND c.name = '${p.name}';`;
      }
    return sql;
  });

  fastify.get("/create-productsFinishes", async (request, reply) => {
    let sql;
    for (const p of finishes) {
        sql += "\nINSERT INTO productsFinishes (productId,finishId) ";
        sql += `SELECT p.id, f.id FROM products p, finishes f WHERE p.finish = '${p.name}' AND f.name = '${p.name}';`;
      }
    return sql;
  });

  fastify.get("/create-productsTags", async (request, reply) => {
    let sql;
    for (const p of addProductsTags1) {
      const tags = p.tags.split(", ");
      for (const t of tags) {
        sql += "\nINSERT INTO productsTags (productId,tagId) ";
        sql += `SELECT p.id, t.id FROM products p, tags t WHERE p.name = '${p.name}' AND p.code = '${p.code}' AND t.name = '${t}';`;
      }
    }
    return sql;
  });

  fastify.get("/create-productsTagsWithoutCode", async (request, reply) => {
    let sql;
    for (const p of productsTagsWithoutCode) {
      const tags = p.tags.split(", ");
      for (const t of tags) {
        sql += "\nINSERT INTO productsTags (productId,tagId) ";
        sql += `SELECT p.id, t.id FROM products p, tags t WHERE p.name = '${p.name}' AND p.color = '${p.color}' AND t.name = '${t}';`;
      }
    }
    return sql;
  });

  fastify.get("/create-productsTagsSales", async (request, reply) => {
    let sql;
    for (const p of productsTagsSales) {
      const tags = p.tags.split(", ");
      for (const t of tags) {
        if (!t) continue;
        sql += "\nINSERT INTO productsTags (productId,tagId) ";
        sql += `SELECT p.id, t.id FROM products p, tags t WHERE p.size = '${p.size}' AND t.name = '${t}';`;
      }
    }
    return sql;
  });
}
