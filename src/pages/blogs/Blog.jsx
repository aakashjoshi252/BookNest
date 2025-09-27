import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { api } from "../../api/api"; // optional if you want to fetch blogs from API

export default function Blog() {
  const [posts, setPosts] = useState([]);

  // Example: Fetch posts from API (optional)
  useEffect(() => {
    // Uncomment below if using API
    // async function fetchPosts() {
    //   try {
    //     const response = await api.get("/blogs");
    //     setPosts(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchPosts();

    // Example static posts
    setPosts([
      {
        id: 1,
        title: "Top 10 Must-Read Books of 2025",
        author: "Jane Doe",
        date: "2025-09-20",
        summary: "Explore the most popular books this year that every reader should add to their shelf.",
        cover: "https://www.shutterstock.com/image-photo/phrase-must-read-appears-on-260nw-1699635712.jpg",
        link: "/blog/1",
      },
      {
        id: 2,
        title: "How to Start Your Book Collection",
        author: "John Smith",
        date: "2025-08-15",
        summary: "Tips and tricks for starting your very own personal library at home.",
        cover: "https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/10/Airiz-Casta-Reading-is-a-conversation.jpg?resize=540%2C520&ssl=1",
        link: "/blog/2",
      },
      {
        id: 3,
        title: "The Benefits of Reading Daily",
        author: "Emily Clark",
        date: "2025-07-10",
        summary: "Discover how daily reading can improve your life and expand your mind.",
        cover: "https://keetonsonline.wordpress.com/wp-content/uploads/2017/02/books.jpg",
        link: "/blog/3",
      },
    ]);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-5 text-center fw-bold">Our Blog</h2>

      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <div className="card shadow-sm rounded-4 h-100 hover-shadow">
              <img
                src={post.cover}
                className="card-img-top rounded-top-4"
                alt={post.title}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text text-muted mb-2">
                  By {post.author} | {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="card-text flex-grow-1">{post.summary}</p>
                <NavLink  to={`blog/blogdetails/${post.id}`} // to={post.link}
                 className="btn btn-primary mt-3 w-100" > Read More </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}
