import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const baseAPI = "http://localhost:4000/api/v1";

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get(`${baseAPI}/books`);
      setBooks(response.data.data);

      console.log("Books fetched:", response.data.data); 
    } catch (exception) {
      console.error("Error fetching books:", exception);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);


  useEffect(() => {
    if (books.length > 0) {
      console.log("First book:", books[0]);
    }
  }, [books]);

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
