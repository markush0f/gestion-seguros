import { DataSource } from "typeorm"
console.log(__dirname)
export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "test",
    entities: [__dirname + "/models/entities/*.ts"], // Desarrollo
    // entities: [__dirname + "/../dist/models/entities/*.js"], // Producción
    logging: true,
    synchronize: true,
});