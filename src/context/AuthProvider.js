import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
 
        useEffect(() => {
          setLoading(true)
            getUser();
        },[])

        const getUser = async () => {
          setLoading(true);
          fetch('https://house-hunter-server-beryl.vercel.app/auth/getUser', {
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
          setLoading(false);
            if(data?.email) {
                setUser(data); 
                setLoading(false);       
            }
            else {
              setUser({});
              setLoading(false);
            }
        })
        }

        const authInfo = {
          user,
          getUser,
          setUser,
          loading
        }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;