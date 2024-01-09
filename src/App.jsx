import BookWrapper from "./Components/BookWrapper";
import { useMediaQuery } from "react-responsive";
import { NotebookProvider } from "./Contexts/NotebookContext";
import Notebook from "./Components/Notebook";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <NotebookProvider>
      {isMobile && <Notebook />}
      {!isMobile && <BookWrapper />}
    </NotebookProvider>
  );
}

export default App;
