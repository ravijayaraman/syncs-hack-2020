import React, { useState, createContext } from 'react';

const UserContext = createContext({});
const UserProvider = (props) => {
  // Context state
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'user',
    point: 0,
    password: '',
    jwt: '',
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
