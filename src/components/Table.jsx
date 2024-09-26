import Pagination from "./Pagination";

function Table({
  data,
  currentPage,
  metaData,
  setCurrentPage,
  setPerPage,
  perPage,
}) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {(data || []).map((row, index) => (
            <tr key={row?.id}>
              <td>{index + 1 + (currentPage - 1) * perPage}</td>
              <td>{row.name}</td>
              <td>{row.city}</td>
              <td>
                <div className="flag-container">
                  {row.country}
                  <img
                    src={`https://flagsapi.com/${row?.countryCode}/flat/32.png`}
                  ></img>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data?.length && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.floor(metaData?.totalCount / perPage)}
          setCurrentPage={setCurrentPage}
          setPerPage={setPerPage}
          perPage={perPage}
        />
      )}
    </div>
  );
}

export default Table;
