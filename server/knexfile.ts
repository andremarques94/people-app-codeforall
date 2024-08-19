import type { Knex } from "knex";
import "dotenv/config";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      database: process.env.PGDATABASE,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./db-seeds",
    },
  },
  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: process.env.PGTESTUSER,
      database: process.env.PGTESTDATABASE,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./db-seeds",
    },
  },
};

export default config;
