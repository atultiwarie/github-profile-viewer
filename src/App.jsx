import { useState } from "react";
import ProfileCard from "./assets/ProfileCard";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setUserData(null);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>🔍 GitHub Profile Viewer</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {userData && <ProfileCard user={userData} />}
    </div>
  );
}

export default App;
