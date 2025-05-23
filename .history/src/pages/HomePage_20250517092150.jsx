 import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  
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
