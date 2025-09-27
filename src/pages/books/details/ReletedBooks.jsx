import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../../api/api";

export default function RelatedBooks({ currentBookId }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatedBooks();
  }, [currentBookId]);

  const fetchRelatedBooks = async () => {
    try {
      const response = await api.get("/books");
      // Exclude the current book
      const related = response.data
        .filter((book) => book.id !== currentBookId)
        .slice(0, 4); // Limit to 4 books
      setBooks(related);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return <p className="text-center mt-3">No related books found.</p>;
  }

  return (
    <div className="related-books">
      <h3 className="mb-4 text-primary fw-bold">Related Books</h3>
      <div className="row g-4">
        {books.map((book) => (
          <div className="col-6 col-md-3" key={book.id}>
            <div className="card h-100 shadow-sm border-0 rounded-4 hover-scale">
              <img
                src={book.cover}
                alt={book.title}
                className="card-img-top rounded-top-4"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold">{book.title}</h6>
                <p className="card-text text-muted mb-2">{book.author}</p>
                <NavLink
                  to={`/books/details/${book.id}`}
                  className="btn btn-sm btn-primary mt-auto rounded-3"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
