import React, { useState, useEffect } from "react";
import { GenericTitle } from "../common/GenericTitle";
import NewsCardList from "./NewsCardList";
import Pagination from "./Pagination";
import { requestNews } from "./newsReducer";
import { useSelector, useDispatch } from "react-redux";
const NewsPage = () => {
  const dispatch = useDispatch();
  const {
    news: { success = undefined, data = [], message = "Something went wrong." },
    status,
  } = useSelector((state) => {
    return state.news;
  });
  // Counts the number of pages
  const [currentPage, setCurrentPage] = useState(1);
  // By changing this initial value, you set how many items per page would you like to show.
  const [itemsPerPage] = useState(5);
  useEffect(() => {
    dispatch(requestNews({ id: null, isPrivate: true }));
  }, [dispatch]);
  // Getting current items to paginate them
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <GenericTitle text="Novedades" />
      <NewsCardList news={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NewsPage;
