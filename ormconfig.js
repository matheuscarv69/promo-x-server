import "dotenv/config";

module.exports = [
  {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "promo-x",
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/postgres/migrations/**/*.ts"],
    cli: {
      migrationsDir: 'src/database/postgres/migrations'
    }

  }
];