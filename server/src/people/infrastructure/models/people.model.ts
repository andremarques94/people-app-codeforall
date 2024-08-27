import { Model } from 'objection';
import { generateTimestamp } from '../../../common/utils';

export class PeopleModel extends Model {
    static tableName = 'people';

    id!: number;
    first_name!: string;
    last_name!: string;
    email!: string;
    phone!: string;
    picture!: string;
    company_id!: number;
    creation_time!: string;
    update_time!: string;
    version!: number;

    static relationMappings = () => {
        const Company = require('./company.model');
        return {
            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'people.company_id',
                    to: 'company.id'
                }
            }
        };
    };

    static jsonSchema = {
        type: 'object',
        required: ['first_name', 'last_name', 'picture', 'email', 'phone', 'company_id'],

        properties: {
            id: { type: 'integer' },
            first_name: { type: 'string', minLength: 1, maxLength: 255 },
            last_name: { type: 'string', minLength: 1, maxLength: 255 },
            picture: { type: 'string' },
            email: { type: 'string', minLength: 1, maxLength: 255 },
            phone: { type: 'string', minLength: 1, maxLength: 255 },
            company_id: { type: 'integer' }
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
