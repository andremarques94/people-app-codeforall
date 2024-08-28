import { People } from "../../types/People";
import PictureComponent from "../common/picture-component";
import { BuildingOffice2Icon } from "@heroicons/react/16/solid";

interface ListItemProps {
  id: number;
  person: Partial<People>;
  onClick: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ id, person, onClick }) => {
  const { first_name, last_name, company, picture } = person;

  return (
    <li
      key={id}
      onClick={() => person.id && onClick(person.id)}
      className="flex flex-row rounded-lg cursor-pointer m-2 justify-between items-center p-4
                 border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-gray-800
                 shadow hover:shadow-md
                 hover:bg-gray-50 dark:hover:bg-gray-700
                 hover:border-gray-300 dark:hover:border-gray-600
                 transition duration-100 ease-in-out"
    >
      <div>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">{`${first_name} ${last_name}`}</p>
        {company && (
          <div className="flex mt-1">
            <BuildingOffice2Icon className="h-5 w-5 text-gray-500 mr-1 " />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {company.name}
            </p>
          </div>
        )}
      </div>
      <PictureComponent
        picture={picture}
        name={`${first_name} ${last_name}`}
        className="rounded-full object-cover ml-4"
        size="w-16 h-16"
      />
    </li>
  );
};

export default ListItem;
