import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { NavLink, Outlet } from "react-router-dom";

export default function Books() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await api.get("/books");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Filter books by search term
  const filteredBooks = data.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations (on filtered results)
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // scroll to top on page change
  };

  return (
    <>
      <div className="container my-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#0d6efd" }}>
            Our Book Collection
          </h2>
          <p className="text-muted">
            Explore our curated selection of books across various genres.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="mb-5 d-flex justify-content-center" style={{height: "3rem",width:"50", position: "Sticky",color:"black",top: "100px",left: 0,right: 0,zIndex: 1000}}>
          <input type="text" className="form-control w-50 rounded-3 shadow-sm" placeholder="Search books by title..." value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value); 
            setCurrentPage(1) }}/>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filteredBooks.length === 0 ? (
          <p className="text-center mt-3">No books found</p>
        ) : (
          <>
            <div className="row g-4">
              {currentBooks.map((book) => (
                <div key={book.id} className="col-6 col-md-4 col-lg-3">
                  <div className="card h-100 shadow-sm border-0 rounded-4 hover-scale">
                    <img src={book.cover}  className="card-img-top rounded-top-4"  alt={book.title}  style={{ height: "250px", objectFit: "cover" }}/>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{book.title}</h5>
                      <p className="card-text mb-1">
                        <strong>Author:</strong> {book.author}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Rating:</strong> ⭐ {book.rating}
                      </p>
                      <NavLink
                        to={`/books/details/${book.id}`}
                        className="btn btn-primary mt-auto rounded-3"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-5 d-flex justify-content-center">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>

      <Outlet />
    </>
  );
}
