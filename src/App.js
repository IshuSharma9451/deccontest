// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './Components/SearchBar';
import WordDetails from './Components/WordDetails';
import SearchHistory from './Components/SearchHistory';
import "../src/App.css"

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{color: "white", backgroundColor: "black",  justifycontent: "center"}}>Dictionary App</h1>
        <SearchBar />
        <WordDetails />
        <SearchHistory />
      </div>
    </Provider>
  );
}

export default App;

