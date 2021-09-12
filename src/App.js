import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AddDelBranch from './pages/AddDelBranch';
import AddDelStaff from './pages/AddDelStaff';
import StaffOnLeave from './pages/StaffOnLeave';
import ViewKMReport from './pages/ViewKMReport';
import ViewAttendance from './pages/ViewAttendance';
import PrivateRoute from './components/PrivateRoute';




Amplify.configure(awsconfig);



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/adminDashboard">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-del-branch">
            <AddDelBranch />
          </PrivateRoute>
          <PrivateRoute path="/add-del-staff">
            <AddDelStaff />
          </PrivateRoute>
          <PrivateRoute path="/staff-on-leave">
            <StaffOnLeave />
          </PrivateRoute>
          <PrivateRoute path="/view-km-location">
            <ViewKMReport />
          </PrivateRoute>
          <PrivateRoute path="/view-attendance">
            <ViewAttendance />
          </PrivateRoute>

          {/* <Route component={Dashboard} path="/dashboard" /> */}
          <Route component={Login} path="/log-in" />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
