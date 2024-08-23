import { People } from '../models/people.model';

const people: People[] = [
    People.fromJson({
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'nozk@gmail.com',
        phone: '1234567890',
        picture: 'https://randomuser.me/api/port/',
        company_id: 1,
        creation_time: '2021-01-01',
        update_time: '2021-01-01',
        version: 1
    }),
    People.fromJson({
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'nozk@gmail.com',
        phone: '1234567890',
        picture: 'https://randomuser.me/api/port/',
        company_id: 1,
        creation_time: '2021-01-01',
        update_time: '2021-01-01',
        version: 1
    }),
    People.fromJson({
        id: 3,
        first_name: 'Johnathan',
        last_name: 'Doe',
        email: 'nozk@gmail.com',
        phone: '1234567890',
        picture: 'https://randomuser.me/api/port/',
        company_id: 1,
        creation_time: '2021-01-01',
        update_time: '2021-01-01',
        version: 1
    })
];

export async function findAll(): Promise<People[]> {
    return people;
}

export async function findById(personId: number): Promise<People | undefined> {
    return people.find((person) => person.id === personId);
}

export async function updateById(personId: number, updateData: People): Promise<People> {
    people.forEach((person) => {
        if (person.id === personId) {
            Object.assign(person, updateData);
        }
    });

    const index = people.findIndex((person) => person.id === personId);
    return people[index];
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
