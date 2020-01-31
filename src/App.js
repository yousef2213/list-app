import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Form from './Component/Form'
import List from './Component/List'

function App() {
  return (
    <div className="container">
        <div className="row row-all">
          <Form />
          <List />
        </div>
    </div>
  );
}

export default App;
