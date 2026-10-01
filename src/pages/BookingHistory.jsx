import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [loading, setLoading] = useState(false);

  // Retrieve all bookings or filter based on venue (Step 10)
  async function getBookings(venueFilter = selectedVenue) {
    setLoading(true);
    let query = supabase.from("bookings").select("*");

    if (venueFilter) {
      query = query.eq("venue", venueFilter);
    }

    const { data, error } = await query;

    setLoading(false);
    if (error) {
      console.error(error);
      alert("Failed to retrieve bookings: " + error.message);
      return;
    }

    setBookings(data || []);
  }

  function handleVenueChange(e) {
    const venue = e.target.value;
    setSelectedVenue(venue);
    getBookings(venue);
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <button
          className="history-button"
          onClick={() => {
            setSelectedVenue("");
            getBookings("");
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "View All Bookings"}
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          <label
            htmlFor="venue-filter"
            style={{ fontWeight: "bold", color: "#182b49" }}
          >
            Filter by Venue:
          </label>
          <select
            id="venue-filter"
            value={selectedVenue}
            onChange={handleVenueChange}
            style={{
              padding: "10px 14px",
              borderRadius: "6px",
              border: "1px solid #c5cad3",
              background: "white",
              font: "inherit",
              cursor: "pointer",
            }}
          >
            <option value="">-- All Venues --</option>
            <option value="Wankhede Stadium">Wankhede Stadium</option>
            <option value="M. Chinnaswamy Stadium">M. Chinnaswamy Stadium</option>
          </select>
        </div>
      </div>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Stand</th>
              <th>Venue</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    color: "#666",
                    padding: "24px",
                  }}
                >
                  No bookings found. Click "View All Bookings" or select a venue above.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.stand}</td>
                  <td>{booking.venue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;
