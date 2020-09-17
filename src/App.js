import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/FireBaseAuth/Login';
import Travel from './Component/Travel/Travel';
import PlaceHotel from './Component/PlaceHotel/PlaceHotel';
import { UserProvider } from './Component/FireBaseAuth/auth';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SignUp from './Component/FireBaseAuth/SignUp';
function App() {
  return (
    <UserProvider>
      <div className="background-style"></div>
      <div className="background-color"></div>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            {/* <Route exact path="/place-hotel/:Place">
                <PlaceHotel />
            </Route> */}
            <PrivateRoute exact path="/place-hotel/:Place">
              <PlaceHotel />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sign-up/">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/travel/:Place">
              <Travel />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
