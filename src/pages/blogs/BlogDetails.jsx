import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const allPosts = [
      {
        id: "1",
        title: "Top 10 Must-Read Books of 2025",
        author: "Jane Doe",
        date: "2025-09-20",
        cover: "https://www.shutterstock.com/image-photo/phrase-must-read-appears-on-260nw-1699635712.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat...",
      },
      {
        id: "2",
        title: "How to Start Your Book Collection",
        author: "John Smith",
        date: "2025-08-15",
        cover: "https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/10/Airiz-Casta-Reading-is-a-conversation.jpg?resize=540%2C520&ssl=1",
        content:
          "Starting a book collection can be exciting! Here are some tips on how to organize, categorize, and select books for your personal library. First, decide on the genres you love. Then, find editions that match your budget and taste. Remember, consistency is key...",
      },
      {
        id: "3",
        title: "The Benefits of Reading Daily",
        author: "Emily Clark",
        date: "2025-07-10",
        cover: "https://keetonsonline.wordpress.com/wp-content/uploads/2017/02/books.jpg",
        content:
          "Reading daily has immense benefits. It improves your focus, expands your knowledge, and helps reduce stress. Even just 20 minutes a day can make a difference in your mental clarity and creativity. Pick a time that works best for you and make it a habit...",
      },
      {
        id: "4",
        title: "Best Study Techniques for Book Lovers",
        author: "Michael Lee",
        date: "2025-06-05",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNydIsFOzAkaY4Yyz-c2e_soY3oTlZ1DVblg&s",
        content:
          "Learning effectively while reading can maximize retention. Techniques like summarizing, note-taking, and spaced repetition can help. Additionally, discussing books with peers enhances comprehension and critical thinking...",
      },
      {
        id: "5",
        title: "Top Fiction Books You Can't Miss",
        author: "Sophia Turner",
        date: "2025-05-20",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VYDUpFHm-FpXS1_mIBD_SUtVVVDSWEItpQ&s",
        content:
          "Fiction books transport you to new worlds and ideas. From classic novels to modern thrillers, these books captivate readers with rich characters and immersive plots. Here are some must-reads for your collection...",
      },
    ];

    const selectedPost = allPosts.find((p) => p.id === id);
    setPost(selectedPost);

    setRelatedPosts(allPosts.filter((p) => p.id !== id));
  }, [id]);

  if (!post) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Main Post */}
      <div className="card shadow-sm rounded-4 border-0 mb-5">
        <img
          src={post.cover}
          alt={post.title}
          className="card-img-top rounded-top-4"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="fw-bold mb-2">{post.title}</h2>
          <p className="text-muted mb-3">
            By {post.author} | {new Date(post.date).toLocaleDateString()}
          </p>
          <p className="card-text">{post.content}</p>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div>
          <h4 className="mb-4 fw-bold">Related Posts</h4>
          <div className="row g-4">
            {relatedPosts.map((r) => (
              <div className="col-md-6 col-lg-4" key={r.id}>
                <div className="card shadow-sm rounded-4 h-100 hover-shadow">
                  <img
                    src={r.cover}
                    className="card-img-top rounded-top-4"
                    alt={r.title}
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{r.title}</h5>
                    <p className="text-muted mb-2">
                      By {r.author} | {new Date(r.date).toLocaleDateString()}
                    </p>
                    <NavLink to="/"
                      // to={`blog/blogdetails/${r.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useParams, NavLink } from "react-router-dom";
// import { api } from "../../api/api"; // optional if you want to fetch from API

// export default function BlogDetails() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [relatedPosts, setRelatedPosts] = useState([]);

//   useEffect(() => {
//     // Fetch single post
//     const fetchPost = async () => {
//       try {
        // Uncomment if using API
        // const response = await api.get(`/blogs/${id}`);
        // setPost(response.data);

        // Example static data
        // const allPosts = [
        //   {
        //     id: "1",
        //     title: "Top 10 Must-Read Books of 2025",
        //     author: "Jane Doe",
        //     date: "2025-09-20",
        //     cover: "https://via.placeholder.com/800x400?text=Book+1",
        //     content:
        //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        //   },
        //   {
        //     id: "2",
        //     title: "How to Start Your Book Collection",
        //     author: "John Smith",
        //     date: "2025-08-15",
        //     cover: "https://via.placeholder.com/800x400?text=Book+2",
        //     content:
        //       "Starting a book collection can be exciting! Here are some tips on how to organize, categorize, and select books for your personal library...",
        //   },
        //   {
        //     id: "3",
        //     title: "The Benefits of Reading Daily",
        //     author: "Emily Clark",
        //     date: "2025-07-10",
        //     cover: "https://via.placeholder.com/800x400?text=Book+3",
        //     content:
        //       "Reading daily has immense benefits. It improves your focus, expands your knowledge, and helps reduce stress...",
        //   },
        // ];

        // const selected = allPosts.find((p) => p.id === id);
        // setPost(selected);

        // Related posts (exclude current)
        // setRelatedPosts(allPosts.filter((p) => p.id !== id));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPost();
  // }, [id]);

  // if (!post) {
  //   return (
  //     <div className="text-center mt-5">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="container my-5">
      {/* Blog Post */}
//       <div className="card shadow-sm rounded-4 border-0 mb-5">
//         <img
//           src={post.cover}
//           alt={post.title}
//           className="card-img-top rounded-top-4"
//           style={{ maxHeight: "400px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h2 className="fw-bold mb-2">{post.title}</h2>
//           <p className="text-muted mb-3">
//             By {post.author} | {new Date(post.date).toLocaleDateString()}
//           </p>
//           <p className="card-text">{post.content}</p>
//         </div>
//       </div>

//       {/* Related Posts */}
//       {relatedPosts.length > 0 && (
//         <div>
//           <h4 className="mb-4 fw-bold">Related Posts</h4>
//           <div className="row g-4">
//             {relatedPosts.map((r) => (
//               <div className="col-md-6 col-lg-4" key={r.id}>
//                 <div className="card shadow-sm rounded-4 h-100 hover-shadow">
//                   <img
//                     src={r.cover}
//                     className="card-img-top rounded-top-4"
//                     alt={r.title}
//                     style={{ objectFit: "cover", height: "180px" }}
//                   />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title fw-bold">{r.title}</h5>
//                     <p className="text-muted mb-2">
//                       By {r.author} | {new Date(r.date).toLocaleDateString()}
//                     </p>
//                     <NavLink to={`/blog/${r.id}`} className="btn btn-primary mt-auto">
//                       Read More
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <style>{`
//         .hover-shadow:hover {
//           box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
//           transition: 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// }
