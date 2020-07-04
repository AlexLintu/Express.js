import React, { useState, useEffect } from 'react';
import './Users.css';


function Users() {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const res = await fetch('/api/users');
    res
      .json()
      .then(res => setUsers(res))
      .catch(err => setErrors(err));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <h2>Text in the Users component</h2>
      <ol>
        {users.map(user =>
          <li key={user.id}>{user.name}</li>
        )}
      </ol>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </>
  )
};

export default Users;

