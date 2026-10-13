import { useState } from 'react';
import { users } from '../data';
import UserCard from '../components/UserCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Team Directory</h1>
      <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};
export default Home;