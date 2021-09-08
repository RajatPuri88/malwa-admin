import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

Amplify.configure(awsconfig);
function App() {
  return (
    <>
      <Router>
        <Switch>

          <PrivateRoute component={Dashboard} path="/dashboard">
          </PrivateRoute>
          <Route component={Login} path="/log-in" />

        </Switch>
      </Router>
    </>

  );
}

export default App;
