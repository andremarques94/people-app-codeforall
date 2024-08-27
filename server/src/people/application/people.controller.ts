import { Request, Response } from 'express';
import { listPeople, getPersonById } from '../domain/people.service';

export async function getAllPeople(req: Request, res: Response): Promise<void> {
    try {
        const people = await listPeople();
        console.log(people);
        res.json(people);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function personDetails(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
        const person = await getPersonById(id);
        res.json(person);
    } catch (error) {
        if (error instanceof Error) {
            error.message === 'Person not found'
                ? res.status(404).json({ error: error.message })
                : res.status(500).json({ error: 'Internal server error' });
        }
    }
}
