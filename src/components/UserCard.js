import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <Link to={`/users/${user.id}`}>View Details</Link>
    </div>
  );
};
export default UserCard;