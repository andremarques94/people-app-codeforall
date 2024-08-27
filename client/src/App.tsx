import { useEffect, useState } from "react";

interface People {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  picture: string;
  company?: Company | undefined;
}

interface Company {
  id: number;
  name: string;
  symbol: string;
  industry: string;
}

function App() {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8800/api/people");
      const json = await data.json();
      setPeople(json);
    })();
  }, []);

  return (
    <>
      {people.map((person: People) => (
        <div key={person.id}>
          <h1>
            {person.first_name} {person.last_name}
          </h1>
          <p>{person.email}</p>
          <p>{person.phone}</p>
        </div>
      ))}
    </>
  );
}

export default App;
