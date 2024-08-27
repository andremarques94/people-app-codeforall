import { PeopleModel } from '../models/people.model';
import { PersistenceToDomain } from '../types';

export async function findAll(): Promise<PersistenceToDomain[]> {
    return PeopleModel.query().select('id', 'first_name', 'last_name', 'email', 'phone', 'picture').withGraphFetched('company(defaultSelects)');
}

export async function findById(personId: number): Promise<PersistenceToDomain | undefined> {
    return PeopleModel.query()
        .where('id', personId)
        .select('id', 'first_name', 'last_name', 'email', 'phone', 'picture')
        .withGraphFetched('company(defaultSelects)')
        .first();
}
