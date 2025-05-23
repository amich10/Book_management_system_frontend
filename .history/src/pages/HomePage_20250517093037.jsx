import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  axios.get('http://localhost:4000/api/v1/books')
  .then((respone) => {
    console.log("Datas feteched sucessfully",respone)
  }).catch(() => {

    console.log("Sorry, data cannot be fetched now.")
  })

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center">
        <Card />
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
