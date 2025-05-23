import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const fetchAllBooks = async () => {
    await axios
      .get("http://localhost:4000/api/v1/books")
      .then((response) => {
        console.log("Datas feteched sucessfully", response);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log("Sorry, data cannot be fetched now.", error);
      });
  };

  useEffect(() => {
    fetchAllBooks();
  },[]);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center">
        <Card books={books} />
      </div>
    </>
  );
};

export default HomePage;
