import BookWrapper from "./Components/BookWrapper";
import { useMediaQuery } from "react-responsive";
import { NotebookProvider, useNotebook } from "./Contexts/NotebookContext";
import Notebook from "./Components/Notebook";

function App() {
  const { isMobile } = useNotebook();

  return (
    <NotebookProvider>
      {isMobile && <Notebook />}
      {!isMobile && <BookWrapper />}
    </NotebookProvider>
  );
}

export default App;
