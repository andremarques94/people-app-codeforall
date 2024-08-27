import { People } from './people.interface';

export interface PeopleRepository {
    findAll(): Promise<People[]>;
    findById(id: number): Promise<People | undefined>;
}
