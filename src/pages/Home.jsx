import { Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Welcome to IPL Ticket Booking</h1>
      <p style={{ fontSize: "18px", color: "#475569", marginBottom: "24px" }}>
        Grab your seats for the most thrilling IPL matches of the season!
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Link
          to="/matches"
          style={{
            padding: "10px 20px",
            backgroundColor: "#182b49",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}
        >
          Explore Matches
        </Link>
        <Link
          to="/booking"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0284c7",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}
        >
          Book Now
        </Link>
      </div>
    </main>
  );
}

export default Home;
