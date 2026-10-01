import { useNavigate } from "react-router-dom";

function MatchCard(props) {
  const navigate = useNavigate();

  const handleBook = () => {
    const venueValue = props.venue.includes("Wankhede")
      ? "Wankhede Stadium"
      : "M. Chinnaswamy Stadium";
    navigate("/booking", { state: { venue: venueValue } });
  };

  return (
    <div className="match-card">
      <h2>
        {props.team1} vs {props.team2}
      </h2>

      <p>📍 {props.venue}</p>

      <p>📅 {props.date}</p>

      <button onClick={handleBook}>Book Ticket</button>
    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        <MatchCard
          team1="RCB"
          team2="CSK"
          venue="M. Chinnaswamy Stadium, Bengaluru"
          date="25 March 2026"
        />
        <MatchCard
          team1="MI"
          team2="KKR"
          venue="Wankhede Stadium, Mumbai"
          date="28 March 2026"
        />
      </div>
    </main>
  );
}

export default Matches;
