import { PeopleModel } from './models/people.model';
import { CompanyModel } from './models/company.model';

export type PersistenceToDomain = Omit<PeopleModel, 'company_id'> & {
    company?: Pick<CompanyModel, 'id' | 'name' | 'symbol' | 'industry'>;
};
