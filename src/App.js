import { useState } from "react";
import BodyContent from "./components/BodyContent/BodyContent";
import Header from "./components/Header/Header";
import TableModal from "./components/TableModal/TableModal";

function App() {
  const [isModalShow, setModalShow] = useState(false);

  const setModalHandler = () => {
    setModalShow(!isModalShow);
  };

  return (
    <div>
      <Header />
      <BodyContent onToggle={setModalHandler} />
      {isModalShow && <TableModal title="dsd" message="dsd" />}
    </div>
  );
}

export default App;
