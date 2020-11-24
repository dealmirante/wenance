import React from 'react';
import {Personajes} from './components/Personajes'

import {Provider} from 'react-redux';
import generarStore from './redux/store';

import './index.css';


function App() {

  
  return (
    <Provider store = {generarStore()}>
      <Personajes/>
    </Provider>
  );
}

export default App;
