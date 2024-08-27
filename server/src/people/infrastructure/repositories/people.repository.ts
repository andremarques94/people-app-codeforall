import { PeopleModel } from '../models/people.model';

export async function findAll(): Promise<PeopleModel[]> {
    return PeopleModel.query();
}

export async function findById(personId: number): Promise<PeopleModel | undefined> {
    return (await PeopleModel.query()
        .where('id', personId)
        .select('id', 'first_name', 'last_name', 'email', 'phone', 'picture')
        .withGraphFetched('company')
        .first()) as PeopleModel;
}

/*
export async function updateById(personId: number, updateData: People): Promise<People> {

}

export async function deleteById(personId: number): Promise<void> {
    const index = people.findIndex((person) => person.id === personId);
    people.splice(index, 1);
}

export async function findBy(criteria: Partial<People>): Promise<People[]> {
    return people.filter((person) => {
        return Object.keys(criteria).every((key) => {
            return person[key as keyof People] === criteria[key as keyof People];
        });
    });
}

*/
