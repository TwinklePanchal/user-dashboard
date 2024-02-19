import React from 'react';
import './UserList.css'; 

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul class="user-list">
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email} - {user.contactNumber} - {user.address} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;