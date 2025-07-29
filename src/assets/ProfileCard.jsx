
const ProfileCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name || user.login}</h2>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <p>Location {user.location || "N/A"}</p>
      <p> Public Repositories: {user.public_repos}</p>
      <p>
        {" "}
        <a href={user.html_url} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </p>
    </div>
  );
};

export default ProfileCard;
