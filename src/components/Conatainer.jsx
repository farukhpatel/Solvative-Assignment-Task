import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Table from "./Table";
import axios from "axios";
import Empty from "./Empty";

function Container() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const getData = async (currentPage = 1) => {
    let offset = (currentPage - 1) * perPage;
    const options = {
      method: "GET",
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=${perPage}&offset=${offset}&namePrefix=${searchValue}`,
      params: { toPlaceId: "Q60" },
      headers: {
        "x-rapidapi-key": "5229d0ca6dmsh4f4c0c9debd738fp18732djsn72c3b978b63e",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage, searchValue, perPage]);

  return (
    <div className="container">
      <Searchbar setSearchValue={setSearchValue} searchValue={searchValue} />

      {data?.data?.length > 0 ? (
        <Table
          data={data?.data}
          metaData={data?.metadata}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPerPage={setPerPage}
          perPage={perPage}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Container;
