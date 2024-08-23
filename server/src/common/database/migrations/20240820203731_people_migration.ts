import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('company', (table: Knex.CreateTableBuilder) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('symbol').notNullable();
            table.string('industry').notNullable();
            table.integer('version').notNullable();
            table.dateTime('creation_time').notNullable();
            table.dateTime('update_time').notNullable();
        })
        .createTable('people', (table: Knex.CreateTableBuilder) => {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.text('picture');
            table.integer('version').notNullable();
            table.dateTime('creation_time').notNullable();
            table.dateTime('update_time').notNullable();
            table.integer('company_id').unsigned().notNullable();
            table.foreign('company_id').references('company.id');
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('people').dropTableIfExists('company');
}
