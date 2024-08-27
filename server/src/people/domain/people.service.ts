import { findAll, findById } from '../infrastructure/repositories/people.repository';
import { People } from './types';

export async function listPeople(): Promise<People[]> {
    return await findAll();
}

export async function getPersonById(id: string): Promise<People> {
    const person = await findById(parseInt(id, 10));

    if (!person) {
        throw new Error('Person not found');
    }

    return person;
}
