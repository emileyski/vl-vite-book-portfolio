import BookWrapper from "./Components/BookWrapper";
import { NotebookProvider, useNotebook } from "./Contexts/NotebookContext";
import Notebook from "./Components/Notebook";
import RotationErrorMessage from "./Components/RotationErrorMessage";

function App() {
  const { isMobile, isRotatedMobile } = useNotebook();

  if (isRotatedMobile) {
    return <RotationErrorMessage />;
  }

  return (
    <NotebookProvider>
      {isMobile && <Notebook />}
      {!isMobile && <BookWrapper />}
    </NotebookProvider>
  );
}

export default App;
