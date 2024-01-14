import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const NotebookContext = createContext();

const pagesCount = 7;

function NotebookProvider({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [currentPage, setCurrentPage] = useState(isMobile ? 1 : 4);

  const setCurrentPageWrapper = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > pagesCount) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const scrollToFirstPage = (delay = 0) => {
    if (isMobile) {
      Array.from(Array(pagesCount).keys()).forEach((pageNumber) => {
        setTimeout(() => {
          setCurrentPageWrapper(currentPage - pageNumber);
        }, delay + pageNumber * 500);
      });
      return;
    }
    Array.from(Array(pagesCount - 3).keys()).forEach((pageNumber) => {
      setTimeout(() => {
        setCurrentPageWrapper(currentPage - pageNumber);
      }, delay + pageNumber * 500);
    });
  };

  const scrollToLastPage = (delay = 2100) => {
    if (isMobile) {
      Array.from(Array(pagesCount).keys()).forEach((pageNumber) => {
        setTimeout(() => {
          setCurrentPageWrapper(pageNumber + 1);
        }, delay + pageNumber * 500);
      });
      return;
    }
    Array.from(Array(pagesCount - 3).keys()).forEach((pageNumber) => {
      setTimeout(() => {
        setCurrentPageWrapper(pageNumber + 1);
      }, delay + pageNumber * 500);
    });
  };

  return (
    <NotebookContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pagesCount,
        isMobile,
        scrollToFirstPage,
        scrollToLastPage,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
}

NotebookProvider.propTypes = {
  children: PropTypes.node,
};

function useNotebook() {
  const context = useContext(NotebookContext);

  if (context === undefined) {
    throw new Error("NotebookContext was used outside NotebookProvider");
  }
  return context;
}

export { NotebookProvider, useNotebook };
