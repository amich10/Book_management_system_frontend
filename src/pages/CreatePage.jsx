import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const baseAPI = "http://localhost:4000/api/v1";

  const navigate = useNavigate();

  //first approach
  /* const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookPrice, setBookPrice] = useState(0);
  const [bookDescription, setBookDescription] = useState("");
  console.log(bookName);
  console.log(bookAuthor);
  console.log(bookGenre);
  console.log(bookPrice);
  console.log(bookDescription); */

  //second appraoch

  const [bookData, setBookData] = useState({
    bookName: "",
    bookAuthor: "",
    bookGenre: "",
    bookPrice: "",
    bookDescription: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    /*  const {name,value} = event.target */

    // console.log(name,value)
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  console.log(bookData);

  const createBook = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseAPI}/books`, bookData);
      alert("Book added successfully")
      navigate("/");
    } catch (exception) {
      console.log(error);
      alert("Something went wrong.Try again.")
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
          <h3 className="text-xl font-semibold">Create Book</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form onSubmit={createBook}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  /* onChange={(e) => setBookName(e.currentTarget.value)} */
                  onChange={handleChange}
                  type="text"
                  name="bookName"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Write a book title"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Author
                </label>
                <input
                  /*  onChange={(e) => setBookAuthor(e.currentTarget.value)} */
                  onChange={handleChange}
                  type="text"
                  name="bookAuthor"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Genre
                </label>
                <input
                  /*  onChange={(e) => setBookGenre(e.target.value)} */
                  onChange={handleChange}
                  type="text"
                  name="bookGenre"
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Fantasy,Horror,Fiction"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  /*  onChange={(e) => setBookPrice(e.currentTarget.value)} */
                  onChange={handleChange}
                  type="number"
                  name="bookPrice"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Nrs."
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Description
                </label>
                <textarea
                  /* onChange={(e) => setBookDescription(e.currentTarget.value)} */
                  onChange={handleChange}
                  name="bookDescription"
                  id="product-details"
                  rows={6}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Provide a short description about the book."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreatePage;
