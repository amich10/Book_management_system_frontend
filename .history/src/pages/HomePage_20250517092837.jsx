import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  axios.get('http://localhost:4000/api/v1/books')
  .then(() => {
    console.log("Datas feteched sucessfully")
  }).catch(() => {

    console.log("Sorry, data cannot be fetche")
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
