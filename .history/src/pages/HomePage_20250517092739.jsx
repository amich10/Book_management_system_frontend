import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  axios.get('http://localhost:4000/api/v1/books')
  .then(())
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
