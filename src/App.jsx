import ProfileCard from "./ProfileCard";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Varun Bg",
      role: "Frontend Developer",
      description: "Learning React step by step."
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Backend Developer",
      description: "Working with Node.js."
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "UI/UX Designer",
      description: "Designing beautiful UI."
    }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Interactive Profile Card System</h1>

      {users.map(user => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.role}
          description={user.description}
        />
      ))}
    </div>
  );
}