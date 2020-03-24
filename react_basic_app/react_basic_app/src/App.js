import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is an app. Rob is a master hacker.
        </p>
        <p>
          <Link to="../components/TestPage.js">Test Page</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
