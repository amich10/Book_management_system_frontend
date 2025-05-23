import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {props.books.map((book, index) => (
        <Link to={`/single-page/${book.id}`} key={index}>
          <div className="flex px-3 py-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={book.image || "https://tailwindcss.com/img/card-top.jpg"}
                alt={book.title || "Book image"}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">
                  {book.description || "No description available."}
                </p>
              </div>
              <div className="px-6 py-4">
                {book.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
