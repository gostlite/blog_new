import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const config :PostgresConnectionOptions ={
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "devuser",
    password: "12345",
    database: "blog",
   entities: [__dirname + '/**/*.entity.{js,ts}'],
    // synchronize: true
    migrationsTableName: "migrations",
    migrations: [__dirname + '/migrations/*.{js,ts}'],
    
    // synchronize: false,
    logging: true
}

const AppdataSource = new DataSource(config);

export default AppdataSource;