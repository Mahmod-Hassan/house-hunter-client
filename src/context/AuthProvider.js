import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const token = localStorage.getItem('access_token');
    console.log(token);
    console.log(user);
   
        const getUser = async () => {
          fetch('http://localhost:5000/user/getUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            authorization: `bearer ${localStorage.getItem('access_token')}`
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            if(data?.email) {
                setUser(data);       
            }
            else if (data?.error){
              setUser({});
            }
        })
        }

        const authInfo = {
          user,
          getUser,
        }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;