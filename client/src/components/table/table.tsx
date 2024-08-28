import { People } from "../../types/People";
import ListItem from "./list-item";

interface TableProps {
  people: People[];
  onClick: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ people, onClick }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full dark:bg-gray-800">
      <ul className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {people.map((person: People) => (
          <ListItem key={person.id} person={person} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

export default Table;
