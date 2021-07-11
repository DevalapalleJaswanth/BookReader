import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';

const header = {
  background: 'rgb(205, 204, 212)',

}
function App() {
  return (
    <>
      <div style={{ background: 'rgb(205,204,212)' }}>
        <p style={{ color: 'rgb(0, 0, 0)', fontSize: '40px' }}>Book-Reader</p>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Details' component={Details} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
