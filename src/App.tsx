import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllBooks } from './Services/Services';
import Home from './Components/Home';
import Details from './Components/Details';
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    var data = getAllBooks();
    data.then((resp: any) => { console.log(resp); setBooks(resp.data); })
  }, [])
  return (
    <>
      {console.log(books)}
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
