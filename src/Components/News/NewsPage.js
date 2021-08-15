import React, { useState, useEffect } from "react";
import { GenericTitle } from "../common/GenericTitle";
import NewsCardList from "./NewsCardList";
import Pagination from "./Pagination";
import { newsRequests } from "../../Services/News/newsRequests";

const NewsPage = () => {
  const [list, setList] = useState([]);

  // Counts the number of pages
  const [currentPage, setCurrentPage] = useState(1);

  // By changing this initial value, you set how many items per page would you like to show.
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    newsRequests
      .get()
      .then((result) => setList(result.data.reverse()))
      .catch((err) => console.error(err));
  }, []);

  // Getting current items to paginate them
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <GenericTitle text="Novedades" />
      <NewsCardList news={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NewsPage;
