import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { People } from "../../types/People";
import { Company } from "../../types/Company";
import PictureComponent from "../common/picture-component";

interface DetailModalProps {
  visible: boolean;
  onClose: () => void;
  id: number | null;
}

interface DetailCardProps {
  person: People;
  company: Company;
}

const DetailCard: React.FC<DetailCardProps> = ({ person, company }) => {
  return (
    <div className="flex flex-col bg-white p-6 shadow-md dark:bg-gray-700">
      <div className="flex flex-col items-center mb-4">
        <PictureComponent
          picture={person.picture}
          name={`${person.first_name} ${person.last_name}`}
          className="object-cover mb-6"
          size="w-32 h-32"
        />
        <p className="font-semibold text-xl text-black dark:text-white mb-2">{`${person.first_name} ${person.last_name}`}</p>
        <p className="font-semibold text-xl text-green-400">{person.phone}</p>
        <p className="mb-4">
          <span className="text-gray-400">
            {person.email ? person.email : "N/A"}
          </span>
        </p>
      </div>
      <strong className="text-lg text-gray-500 dark:text-gray-300 mr-4 mb-4">
        Company Details
      </strong>{" "}
      <div className="flex flex-col box-border border-dotted border-2 border-gray-300">
        <div className="ml-8 mr-8 mt-4 mb-4">
          <div className="flex flex-row justify-between">
            <strong className="text-gray-500 dark:text-gray-300 mr-4 mb-2">
              Name:{" "}
            </strong>{" "}
            <p className="text-gray-400 dark:text-gray-200">
              {company ? company.name : "N/A"}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <strong className="text-gray-500 dark:text-gray-300 mr-4 mb-2">
              Symbol:{" "}
            </strong>{" "}
            <p className="text-gray-400 dark:text-gray-200">
              {company ? company.symbol : "N/A"}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <strong className="text-gray-500 dark:text-gray-300 mr-4 mb-2">
              Industry:{" "}
            </strong>{" "}
            <p className="text-gray-400 dark:text-gray-200">
              {company ? company.industry : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailModal: React.FC<DetailModalProps> = ({
  visible = false,
  onClose,
  id = null,
}) => {
  const [person, setPerson] = useState<People | null>(null);
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }

      const data = await fetch(`http://localhost:8800/api/people/${id}`);
      const { company: companyDetails, ...personDetails } = await data.json();
      setCompany(companyDetails);
      setPerson(personDetails);
    })();
  }, [id]);

  const closeModal = (): void => {
    onClose();
    setPerson(null);
    setCompany(null);
  };

  return (
    visible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="modal-content w-full sm:max-w-screen-sm">
          <span
            className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-200 dark:bg-gray-800 dark:dark:text-gray-200"
            onClick={closeModal}
          >
            <h2 className="font-semibold text-lg">
              {person?.first_name} {person?.last_name} Details
            </h2>
            <button>
              <XMarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </span>
          {person && company && (
            <DetailCard person={person} company={company} />
          )}
        </div>
      </div>
    )
  );
};

export default DetailModal;
