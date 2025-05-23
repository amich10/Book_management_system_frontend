import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-4 font-serif">
        <Link to={`/single-page/${book.id}`}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-48 object-cover"
              src={
                "https://cdn.pixabay.com/photo/2015/11/05/18/59/book-1024645_1280.jpg"
              }
              alt={book.bookName}
            />
            <div className="px-2 py-2">
              <div className="font-bold text-xl mb-2">{book.bookName}</div>
              <p className="text-gray-700 text-sm">
                Price: Nrs {book.bookPrice}
              </p>
              <p className="text-gray-700 text-sm">Author: {book.bookAuthor}</p>
            </div>
            <div className="px-2 py-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-sm">
                # {book.bookGenre}
              </span>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default Card;


            //OR
/* import { Link } from "react-router-dom";

const Card = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-4 font-serif">
      {books.map((book) => (
        <Link key={book.id} to={`/single-page/${book.id}`}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-48 object-cover"
              src={
                "https://cdn.pixabay.com/photo/2015/11/05/18/59/book-1024645_1280.jpg"
              }
              alt={book.bookName}
            />
            <div className="px-2 py-2">
              <div className="font-bold text-xl mb-2">{book.bookName}</div>
              <p className="text-gray-700 text-sm">
                Price: Nrs {book.bookPrice}
              </p>
              <p className="text-gray-700 text-sm">Author: {book.bookAuthor}</p>
            </div>
            <div className="px-2 py-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-sm">
                # {book.bookGenre}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card; */

