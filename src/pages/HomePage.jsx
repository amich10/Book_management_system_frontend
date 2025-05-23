import axios from "axios";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseAPI = "http://localhost:4000/api/v1";
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${baseAPI}/books`);
      setBooks(response.data.data);
    } catch (exception) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  console.log("books:",books)

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-6">Book Collection</h1>
        {loading && <p className="text-gray-500">Loading books...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-wrap justify-center items-center w-full">
          {!loading && !error && books.length === 0 && (
            <p className="text-gray-500">No books found.</p>
          )}
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
