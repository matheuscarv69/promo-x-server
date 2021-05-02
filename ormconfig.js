import "dotenv/config";

module.exports = [
  {
    type: "postgres",
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/postgres/migrations/**/*.ts"],
    cli: {
      migrationsDir: 'src/database/postgres/migrations'
    }

  }
];