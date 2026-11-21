
"use client";

import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    image: "/images/hundred-islands.jpg",
    shortDescription:
      "Discover the beautiful islands and coastal scenery of Alaminos.",
    description:
      "The Hundred Islands National Park is a protected group of 123 mushroom-shaped limestone islands (124 at low tide) located in the Lingayen Gulf off Alaminos City, Pangasinan. It is recognized as the first national park in the Philippines.",
  },
  {
    id: 2,
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image: "/images/bolinao-lighthouse.jpg",
    shortDescription:
      "Discover a historic lighthouse overlooking the coast of Bolinao.",
    description:
      "The Cape Bolinao Lighthouse is a historic 30.78-meter (101-foot) white concrete lighthouse built in 1905 atop Punta Piedra Point in Barangay Patar, Bolinao, Pangasinan. It is recognized as the second-highest lighthouse in the Philippines, standing 107 meters (351 feet) above sea level.",
  },
  {
    id: 3,
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    image: "/images/balungao-hot-spring.jpg",
    shortDescription:
      "Experience a relaxing destination surrounded by nature.",
    description:
      "The Balungao Hot Spring, officially known as Mt. Balungao Hot and Cold Springs Resort / Balungao Hilltop Adventure, is an eco-tourism park and geothermal resort situated at the foot of Mount Balungao, an extinct volcano in Barangay San Andres, Balungao, Pangasinan.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filteredDestinations = destinations.filter((place) =>
    `${place.name} ${place.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const selectedPlace = destinations.find(
    (place) => place.id === selected
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7f7",
        fontFamily: "Arial, sans-serif",
        color: "#172554",
      }}
    >
      {/* HEADER AND NAVIGATION */}
      <header
        id="home"
        style={{
          backgroundColor: "#172554",
          color: "white",
          padding: "20px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {/* LOGO AND ICON */}
        <a
          href="#home"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "32px" }}>🏝️</span>

          <span style={{ fontSize: "19px", fontWeight: "bold" }}>
            PANGASINAN{" "}
            <span style={{ color: "#fbbf24" }}>HERITAGE</span>
          </span>
        </a>

        {/* NAVIGATION ITEMS */}
        <nav
          style={{
            display: "flex",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Home", link: "#home" },
            { label: "About", link: "#about" },
            { label: "Destinations", link: "#destinations" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* INTRODUCTION / HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(120deg, #172554, #087e8b)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <p
          style={{
            color: "#fbbf24",
            letterSpacing: "4px",
            fontWeight: "bold",
          }}
        >
          DISCOVER • EXPLORE • EXPERIENCE
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: "bold",
            margin: "20px 0",
            lineHeight: "1.2",
          }}
        >
          Discover the Beauty of Pangasinan
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            lineHeight: "1.8",
            color: "#dbeafe",
          }}
        >
          Explore the beautiful destinations, natural wonders,
          and rich heritage of Pangasinan. Your journey starts here.
        </p>

        <a
          href="#destinations"
          style={{
            display: "inline-block",
            backgroundColor: "#fbbf24",
            color: "#172554",
            padding: "13px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "25px",
          }}
        >
          Explore More →
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#168c8c",
            letterSpacing: "3px",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          WELCOME TO OUR SHOWCASE
        </p>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            margin: "15px 0",
            color: "#172554",
          }}
        >
          Experience Pangasinan
        </h2>

        <p
          style={{
            maxWidth: "780px",
            margin: "auto",
            lineHeight: "1.9",
            color: "#475569",
          }}
        >
          The Pangasinan Heritage Digital Showcase is a digital
          tourism platform designed to introduce visitors to
          the province's remarkable destinations, natural wonders,
          and cultural heritage. Discover the beauty of Hundred
          Islands, the historic Bolinao Lighthouse, and the
          relaxing Balungao Hot Spring.
        </p>
      </section>

      {/* DESTINATIONS SECTION */}
      <section
        id="destinations"
        style={{
          backgroundColor: "#080808",
          color: "white",
          padding: "60px 20px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <p
            style={{
              color: "#fbbf24",
              letterSpacing: "3px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            EXPLORE OUR PROVINCE
          </p>

          <h2
            style={{
              fontSize: "32px",
              marginTop: "10px",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            Explore Pangasinan
          </h2>

          <p
            style={{
              color: "#cccccc",
              marginBottom: "25px",
            }}
          >
            Discover your next destination in Pangasinan.
          </p>

          {/* SEARCH FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              maxWidth: "450px",
              marginBottom: "35px",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                padding: "13px",
                color: "#168c8c",
                fontSize: "19px",
              }}
            >
              🔍
            </span>

            <input
              type="search"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "13px 8px",
                border: "none",
                outline: "none",
                color: "#172554",
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#168c8c",
                color: "white",
                border: "none",
                padding: "0 18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Search
            </button>
          </form>

          {/* DESTINATION CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredDestinations.map((place) => (
              <article
                key={place.id}
                style={{
                  backgroundColor: "#b7e8d5",
                  color: "#173d35",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px #0004",
                }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "190px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div style={{ padding: "18px" }}>
                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: "bold",
                    }}
                  >
                    {place.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "12px",
                      margin: "7px 0",
                    }}
                  >
                    📍 {place.location}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                    }}
                  >
                    {place.shortDescription}
                  </p>

                  <button
                    onClick={() => setSelected(place.id)}
                    style={{
                      backgroundColor: "#168c8c",
                      color: "white",
                      border: "none",
                      borderRadius: "7px",
                      padding: "10px 20px",
                      marginTop: "15px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Explore →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* NO SEARCH RESULTS */}
          {filteredDestinations.length === 0 && (
            <p
              style={{
                textAlign: "center",
                padding: "35px 10px",
                color: "white",
              }}
            >
              No destinations found. Try another search.
            </p>
          )}

          {/* DESTINATION IDENTIFICATION / INFORMATION */}
          {selectedPlace && (
            <div
              style={{
                backgroundColor: "#b7e8d5",
                color: "#173d35",
                borderRadius: "15px",
                padding: "30px",
                marginTop: "40px",
                boxShadow: "0 5px 20px #0005",
              }}
            >
              <p
                style={{
                  color: "#168c8c",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  fontSize: "12px",
                }}
              >
                DESTINATION IDENTIFICATION
              </p>

              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "12px 0",
                }}
              >
                {selectedPlace.name}
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "18px",
                }}
              >
                📍 {selectedPlace.location}
              </p>

              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                style={{
                  width: "100%",
                  maxHeight: "350px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "22px",
                }}
              />

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                About This Destination
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  textAlign: "justify",
                }}
              >
                {selectedPlace.description}
              </p>

              <button
                onClick={() => setSelected(null)}
                style={{
                  marginTop: "25px",
                  padding: "11px 25px",
                  backgroundColor: "#172554",
                  color: "white",
                  border: "none",
                  borderRadius: "7px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                ✕ Close Information
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>
          🏝️ Pangasinan Heritage Digital Showcase
        </h3>

        <p
          style={{
            fontSize: "13px",
            marginTop: "10px",
            color: "#cbd5e1",
          }}
        >
          Discover the Beauty, Culture, and Heritage of Pangasinan.
        </p>

        <p
          style={{
            fontSize: "12px",
            marginTop: "15px",
            color: "#94a3b8",
          }}
        >
          © 2026 All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
