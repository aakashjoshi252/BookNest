import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function About() {
  const team = [
    {
      name: "Sarah Williamson",
      role: "Co-Founder & CEO",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socials: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      name: "Michael Williamson",
      role: "Co-Founder & Head Buyer",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socials: [<FaFacebook />, <FaInstagram />],
    },
    {
      name: "Jessica Chen",
      role: "Store Manager",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socials: [<FaFacebook />, <FaTwitter />],
    },
    {
      name: "David Rodriguez",
      role: "Events Coordinator",
      img: "https://downloadscdn6.freepik.com/23/2151153/2151152002.jpg?filename=anime-style-couple-characters-with-fire.jpg&token=exp=1758810000~hmac=57cd6ba7c516b1fa07a2b45f228dde95",
      socials: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
  ];

  const values = [
    {
      title: "Curated Selection",
      desc: "We carefully select every title in our store, ensuring quality and diversity across all genres.",
    },
    {
      title: "Community Focus",
      desc: "We're committed to being an active, positive force in our local community.",
    },
    {
      title: "Sustainability",
      desc: "We prioritize eco-friendly practices and support sustainable publishing initiatives.",
    },
    {
      title: "Personal Service",
      desc: "Our knowledgeable staff provides personalized recommendations.",
    },
    {
      title: "Literary Discovery",
      desc: "We champion emerging authors and help readers discover their next favorite book.",
    },
    {
      title: "Local First",
      desc: "We support local authors and businesses through partnerships and promotions.",
    },
  ];

  const testimonials = [
    {
      text: "Chapter & Verse is more than a bookstore - it's a sanctuary for book lovers.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Maria Gonzalez",
      role: "Customer since 2010",
    },
    {
      text: "As a local author, I've been incredibly supported by Chapter & Verse. They hosted my book launch and continue to champion my work.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "James Wilson",
      role: "Local Author",
    },
    {
      text: "I've been coming to Chapter & Verse since they opened. The children's section is magical and got my kids excited about reading.",
      img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Priya Patel",
      role: "Customer since 1995",
    },
  ];

  return (
    <main className="container py-5">
      {/* Our Story */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2>From Humble Beginnings</h2>
          <p>Chapter & Verse began in 1995 as a small neighborhood bookshop...</p>
          <p>
            What started as a modest operation in a 500-square-foot storefront
            has grown into one of the region's most beloved bookstores.
          </p>
          <a href="../index.html" className="btn btn-primary">
            Visit Our Store
          </a>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid rounded shadow"
            src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Our original store"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="row align-items-center mb-5 flex-row-reverse">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>At Chapter & Verse, we believe in the transformative power of books...</p>
          <p>
            We're more than just a bookstore - we're a community hub where book
            lovers can discover new titles, meet authors, and share their
            passion.
          </p>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid rounded shadow"
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Bookstore interior"
          />
        </div>
      </section>

      {/* Team */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row">
          {team.map((member, i) => (
            <div className="col-md-3 text-center mb-4" key={i}>
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle mb-3 img-fluid shadow-sm"
              />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              <div className="d-flex justify-content-center gap-3 fs-5 text-primary">
                {member.socials.map((icon, idx) => (
                  <a key={idx} href="#" className="hover-scale">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Our Values</h2>
        <div className="row">
          {values.map((val, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card text-center shadow h-100 p-4 hover-scale">
                <h5 className="mt-3">{val.title}</h5>
                <p className="text-muted">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((t, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow h-100 p-3 hover-scale">
                <p className="mb-3 fst-italic">"{t.text}"</p>
                <div className="d-flex align-items-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0">{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.03);
          }
        `}
      </style>
    </main>
  );
}
