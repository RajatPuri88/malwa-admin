import React, { useState, useEffect }  from 'react';
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Dashboard from '../pages/Dashboard'

const PrivateRoute = ({ children, ...rest }) => {
  const [signInUser, setSignInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getUser = async() => {
      try {
          console.log('reading user details from remote');
        let user = await Auth.currentAuthenticatedUser();
        console.log('reading user details from remote ',  {user});
        await setSignInUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error)        
      }
    }
    getUser();
  },[]);

  if(isLoading) {
    return <p>...Loading</p>
  }
  return (
    <Route {...rest} render={({ location }) => {
      return signInUser? <Dashboard/>
        : <Redirect to={{
            pathname: '/log-in',
            state: { from: location }
          }} />
    }} />
  )
}

export default PrivateRoute;