import { PeopleRepository } from './people.repository.interface';
import { People } from './people.interface';

export class PeopleService {
    private peopleRepository: PeopleRepository;

    constructor(peopleRepository: PeopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    async listPeople(): Promise<People[]> {
        return await this.peopleRepository.findAll();
    }

    async getPersonById(id: string): Promise<People> {
        const person = await this.peopleRepository.findById(parseInt(id, 10));

        if (!person) {
            throw new Error('Person not found');
        }

        return person;
    }
}
