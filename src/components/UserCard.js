import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      {/* Add this line to show the ID */}
      <p><strong>ID:</strong> {user.id}</p> 
      
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company}</p>
      <Link to={`/users/${user.id}`}>View Details</Link>
    </div>
  );
};

export default UserCard;