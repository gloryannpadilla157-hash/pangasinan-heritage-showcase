
const heritageSites = [
  {
    number: "01",
    title: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    description:
      "Discover breathtaking islands, clear waters, and unforgettable coastal adventures.",
    image: "/images/hundred-islands.jpg",
  },
  {
    number: "02",
    title: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "Explore a historic landmark surrounded by stunning ocean views and coastal scenery.",
    image: "/images/bolinao-lighthouse.jpg",
  },
  {
    number: "03",
    title: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "Enjoy a peaceful escape and discover the natural beauty of Balungao.",
    image: "/images/balungao-hot-spring.jpg",
  },
];

export default function HeritageGrid() {
  return (
    <section className="heritage-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">DISCOVER THE PROVINCE</p>

          <h2>Featured Heritage Destinations</h2>

          <p>
            Explore the remarkable attractions that make
            Pangasinan a beautiful place to visit.
          </p>
        </div>

        <div className="destination-grid">
          {heritageSites.map((site) => (
            <article className="destination-card" key={site.number}>
              <div className="destination-image">
                <img src={site.image} alt={site.title} />

                <span className="destination-number">
                  {site.number}
                </span>
              </div>

              <div className="destination-content">
                <p className="destination-location">
                  {site.location}
                </p>

                <h3>{site.title}</h3>

                <p className="destination-description">
                  {site.description}
                </p>

                <a href="#about" className="discover-link">
                  Discover More <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
