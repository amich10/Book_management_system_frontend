import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [books,setBooks] = useState()


  const fetchAllBooks = () => {
    axios
      .get("http://localhost:4000/api/v1/books")
      .then((respone) => {
        console.log("Datas feteched sucessfully", respone);
        setBooks(respone.data)
      })
      .catch((error) => {
        console.log("Sorry, data cannot be fetched now.", error);
      });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center">
        <Card books={books}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
