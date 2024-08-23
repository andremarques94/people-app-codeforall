import { Knex } from 'knex';
import fs from 'fs';
import path from 'path';
import { generateTimestamp } from '../../utils';

const companydata = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'company-data.json'), 'utf-8'));
const peopledata = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'people-data.json'), 'utf-8'));

export async function seed(knex: Knex): Promise<void> {
    await knex('company').del();
    await knex('people').del();

    for (const company of companydata) {
        const time = generateTimestamp();

        await knex('company').insert({
            name: company.name,
            symbol: company.symbol,
            industry: company.industry,
            creation_time: time,
            update_time: time,
            version: 1
        });
    }

    for (const people of peopledata) {
        const time = generateTimestamp();

        await knex('people').insert({
            first_name: people.first_name,
            last_name: people.last_name,
            email: people.email,
            phone: people.phone,
            picture: people.picture,
            company_id: people.company_id,
            creation_time: time,
            update_time: time,
            version: 1
        });
    }
}
