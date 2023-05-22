import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "128.199.54.14",
    port: 5432,
    username: "buch-admin",
    password: "buch@dmin!2",
    database: "BUCHHIS",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: [],
})