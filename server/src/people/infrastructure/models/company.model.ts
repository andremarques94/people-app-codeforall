import { Model } from 'objection';
import { generateTimestamp } from '../../../common/utils';

export class CompanyModel extends Model {
    static tableName = 'company';

    id!: number;
    name!: string;
    symbol!: string;
    industry!: string;
    creation_time!: string;
    update_time!: string;
    version!: number;

    static relationMappings = () => {
        const People = require('./people.model');

        return {
            people: {
                relation: Model.HasManyRelation,
                modelClass: People,
                join: {
                    from: 'company.id',
                    to: 'people.company_id'
                }
            }
        };
    };

    static jsonSchema = {
        type: 'object',
        required: ['name', 'symbol', 'industry'],

        properties: {
            id: { type: 'integer' },
            name: { type: 'string', minLength: 1, maxLength: 255 },
            symbol: { type: 'string', minLength: 1, maxLength: 10 },
            industry: { type: 'string', minLength: 1, maxLength: 255 }
        }
    };

    $beforeInsert() {
        this.creation_time = generateTimestamp();
        this.update_time = generateTimestamp();
        this.version = 1;
    }

    $beforeUpdate() {
        this.update_time = generateTimestamp();
        this.version++;
    }
}
