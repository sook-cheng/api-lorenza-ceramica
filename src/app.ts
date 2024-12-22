import fastify from 'fastify';
import cors from '@fastify/cors';
import { boFunctionsRoutes, dataCreationRoutes, routes } from './routes';
import fastifyPlugin from 'fastify-plugin';
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import fastifyMysql from '@fastify/mysql';
import fastifyMultipart from '@fastify/multipart';

dotenv.config();
const server = fastify();

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     database: process.env.DATABASE_NAME,
//     username: process.env.DATABASE_USER_NAME,
//     password: process.env.DATABASE_USER_PASSWORD,
//     host: process.env.DATABASE_HOST,
//     port: 3306,
//     define: {
//         freezeTableName: true,
//     },
// });

// server.register(fastifyPlugin((server, opts, done) => {
//     server.decorate('sequelize', sequelize);
//     done();
// })).ready(async () => {
//     try {
//         await server['sequelize'].authenticate();
//         console.log('Database connection is successfully established.');
//     } catch (err) {
//         console.error('Database connection error: ', err);
//     }
// });

// server.addHook('onClose', (_, done) => {
//     sequelize.close().finally(done);
// });

server.register(fastifyMysql, {
    promise: true,
    connectionString: process.env.NODE_ENV === "development"
        ? `mysql://${process.env.DATABASE_USER_NAME}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE_NAME}`
        : `mysql://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_USER_PASSWORD}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE_NAME}`
})

server.register(cors, {
    origin: (request, callback) => {
        // TODO: Restrict allowed origin later
        return callback(null, true);
    }
});

server.register(fastifyMultipart);

server.register(routes);
server.register(dataCreationRoutes);
server.register(boFunctionsRoutes);

server.listen({ host: '127.0.0.1', port: 8888 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});