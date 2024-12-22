import { FastifyInstance } from "fastify";
import { addProducts } from "../bo-functions";
import { pipeline } from "stream";
import fs from 'node:fs';

const imagesFolder = '/home/lorenzac/public_html/images';

export async function boFunctionsRoutes(fastify: FastifyInstance) {
    fastify.post("/add-products", async (request, reply) => {
        const result = await addProducts(fastify, request.body);
        reply.code(result);
    });

    fastify.post("/upload-products-images", async (request, reply) => {
        const images = request.files();
        let data: any = request.body;
        const imgs: any[] = [];
        for await (const i of images) {
            if (i.type === 'file') {
                const type = i.filename.split('.');
                const seq = type[0].split('-');
                pipeline(i.file, fs.createWriteStream(`${imagesFolder}/products/${data.name}/${i.filename}`))
                imgs.push({
                    sequence: seq[seq.length - 1],
                    type: type[type.length - 1],
                });
            }
        }
        // TODO: Insert data into productsImages
        // INSERT INTO `productsImages` (productId, productName, productCode, sequence, type)
        // SELECT id, name, code, `${seq}`, `${type}` FROM products WHERE name = 'data.name' AND code = 'data.code';
        reply.code(200);
    });
}