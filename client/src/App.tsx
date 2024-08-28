import { useEffect, useState } from "react";
import { People } from "./types/People";
import Table from "./components/table/table";
import DarkModeToggle from "./components/common/dark-mode-toggle";
import Header from "./components/common/header";
import DetailModal from "./components/detail/modal";

function App() {
  const [people, setPeople] = useState<People[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8800/api/people");
      const json = await data.json();
      setPeople(json);
    })();
  }, []);

  const openModal = (id: number) => {
    setModalOpen(true);
    setSelectedPerson(id);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <>
      <Header
        url={
          "https://codeforall.com/hs-fs/hubfs/Antigo-vs-novo_branco_500x90.gif?width=1000&height=180&name=Antigo-vs-novo_branco_500x90.gif"
        }
      >
        <DarkModeToggle />
      </Header>
      <Table people={people} onClick={openModal} onReorder={setPeople} />
      <DetailModal
        visible={modalOpen}
        onClose={closeModal}
        id={selectedPerson}
      />
    </>
  );
}

export default App;
