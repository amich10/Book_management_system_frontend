import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
         <nav className="bg-teal-400 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Book Management System
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span/>
            </div>
           {/* <Button title="create" onClick={() => navigate('/create') }/> */}
           <Link to="/create-page">
            <Button title="create"/>
           </Link>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Navbar;
