import { Person } from "./people.model";

const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "Jonas Doe",
    age: 30,
  },
  {
    id: 4,
    name: "Judy Doe",
    age: 30,
  },
];

export async function listPeople(): Promise<Person[]> {
  return people;
}

export async function getPersonById(id: string): Promise<Person> {
  const person = people.find((person) => person.id === parseInt(id, 10));

  if (!person) {
    throw new Error("Person not found");
  }

  return person;
}
