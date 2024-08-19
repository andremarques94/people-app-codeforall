import Knex from "knex";
import config from "../../knexfile";
import { Model } from "objection";

const environment = process.env.NODE_ENV || "development";

export function initDatabase(): Knex.Knex {
  const knex = Knex(config[environment]);
  Model.knex(knex);
  return knex;
}
