import './App.css';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Password from './forgetpass';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
      <div className="content">
        <h1> Login Page</h1>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgetpass">
            <Password />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
