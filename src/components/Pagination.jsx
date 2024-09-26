import SelectPerPage from "./SelectPerPage";

function Pagination({
  currentPage = 1,
  totalPages = 1,
  setCurrentPage,
  setPerPage,
  perPage,
}) {
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="pagination">
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <SelectPerPage setPerPage={setPerPage} perPage={perPage} />
    </div>
  );
}

export default Pagination;
