import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const SinglePage = () => {
  const { id } = useParams();
  const [book, setbook] = useState({});
  const navigate = useNavigate()
  const getsingleBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/books/${id}`
      );
      setbook(response.data.data);
    } catch (exception) {
      console.log(exception);
    }
  };

  const deleteBookById = async() => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/books/${id}`)
      navigate('/')
    } catch (exception) {
      console.log(exception)
    }
  }

  useEffect(() => {
    getsingleBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-500 py-8 h-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2015/11/05/18/59/book-1024645_1280.jpg"
                  alt={book.bookName}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {book.bookName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Nrs. {book.bookPrice}
                  </span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Author:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                   {book.bookAuthor}
                  </span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Genre:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                   {book.bookGenre}
                  </span>
                </div>
              </div>
             
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                Book Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
           <Button title="edit" onClick={() => navigate('/edit-page/'+id)}/>
         </div>
         <div className="mt-3">
           <Button title="delete" onClick={deleteBookById}/>
         </div>
      </div>
    </>
  );
};
export default SinglePage;
