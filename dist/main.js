"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("@fastify/mysql"));
dotenv_1.default.config();
const server = (0, fastify_1.default)();
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
server.register(mysql_1.default, {
    promise: true,
    connectionString: `mysql://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_USER_PASSWORD}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE_NAME}`
});
server.register(cors_1.default, {
    origin: (request, callback) => {
        // TODO: Restrict allowed origin later
        return callback(null, true);
    }
});
server.register(routes_1.routes);
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=main.js.map