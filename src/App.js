import React, { Component, useState } from 'react';
import './App.css';
import {
  Media, Loader, Content, Accordion
} from './components'

const imgUrl = "https://i-h1.pinimg.com/564x/bc/f8/e4/bcf8e4a9e37b32e9cdfdc775d6beeed8.jpg"
const imgAlt = 'some image alt'

const App = () => {
  return (
    <div className="App">

      <Media
        ratio="16by9"
        imageUrl="https://gochristfellowship.com/wp-content/uploads/2019/02/Christ-Fellowship-Church.jpg"
        imageAlt="Image Alt"
        rounded />

    </div >
  );
}

export default App;
