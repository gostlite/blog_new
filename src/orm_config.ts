import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const config :PostgresConnectionOptions ={
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "devuser",
    password: "12345",
    database: "blog",
   entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize: true
}