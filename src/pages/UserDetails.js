import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { users } from '../data';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API delay
    const timer = setTimeout(() => {
      const foundUser = users.find(u => u.id === parseInt(userId));
      setUser(foundUser);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [userId]);

  if (loading) return <Loader />;
  if (!user) return <ErrorMessage message="User not found" />;

  return (
    <div className="user-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};
export default UserDetails;

  // ... (keep all your existing code above this)

  return (
    <div className="user-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{user.name}</h2>
      
      {/* Add this line to show the ID */}
      <p><strong>Employee ID:</strong> {user.id}</p> 
      
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default UserDetails;