import { useState } from "react";

export default function ProfileCard({ name, role, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{
      border: "1px solid gray",
      width: "250px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "white",
      textAlign: "center"
    }}>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}