import { People } from '../data-access/models/people.model';
import { findAll, findById, updateById, deleteById } from '../data-access/repository/people.repository';

export async function listPeople(): Promise<People[]> {
    return findAll();
}

export async function getPersonById(id: string): Promise<People> {
    const person = await findById(parseInt(id, 10));

    if (!person) {
        throw new Error('Person not found');
    }

    return person;
}
