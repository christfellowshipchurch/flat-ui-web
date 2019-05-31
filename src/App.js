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

      <Content
        layout="background"
        imageUrl="https://gochristfellowship.com/wp-content/uploads/2019/02/Christ-Fellowship-Church.jpg"
        imageAlt="Image Alt"
        ratio="16by9"
      >
        <Content.Subtitle>
          This is my Subtitle
        </Content.Subtitle>

        <Content.Title>
          Item Title
        </Content.Title>

        <Content.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula interdum ipsum, in feugiat turpis luctus eu. Vestibulum eu ultrices nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam feugiat cursus turpis, ac eleifend enim ultricies non. Ut posuere magna nulla. Proin semper, eros vitae lacinia eleifend, nulla massa sodales leo, non mollis libero libero ut eros. In hac habitasse platea dictumst. Donec sodales id enim vel pharetra. Cras et nulla metus. Donec et aliquam augue, ut elementum tortor. Aliquam erat volutpat. Suspendisse ornare quis sem sed sagittis. Curabitur congue justo sit amet ex maximus volutpat. Fusce malesuada dolor non ornare iaculis. Mauris porta hendrerit odio eget aliquam. Ut sed convallis libero.
        </Content.Body>
      </Content>

    </div >
  );
}

export default App;
