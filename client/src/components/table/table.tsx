import { People } from "../../types/People";
import { Reorder } from "framer-motion";
import ListItem from "./list-item";
import { useState } from "react";

interface TableProps {
  people: People[];
  onClick: (id: number) => void;
  onReorder: (people: People[]) => void;
}

const Table: React.FC<TableProps> = ({ people, onClick, onReorder }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onSelect = (id: number) => {
    if (isDragging) {
      return;
    }

    onClick(id);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full dark:bg-gray-800">
      <ul className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reorder.Group values={people} onReorder={onReorder}>
          {people.map((person: People) => (
            <Reorder.Item
              value={person}
              key={person.id}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              <ListItem id={person.id} person={person} onClick={onSelect} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </ul>
    </div>
  );
};

export default Table;
