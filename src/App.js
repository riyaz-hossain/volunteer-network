import React, { createContext, useState } from 'react'
import './App.css';
import Home from './components/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import Event from './components/EventPage/Event/Event';
import VolunteerRegList from './components/AdminPage/VolunteerRegistationListMenu/VolunteerRegList';
import VolunteerRegListMenu from './components/AdminPage/VolunteerRegistationListMenu/VolunteerRegList';
import AdminHomePage from './components/AdminPage/AdminHomePage/AdminHomePage';

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <AdminHomePage />
            </Route>
            <PrivateRoute path="/register">
              <Register/>
            </PrivateRoute>
            <PrivateRoute path="/volunteer/:name">
              <Register />
            </PrivateRoute>
            <PrivateRoute path="/events">
              <Event/>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <h3>Page Not Found</h3>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
