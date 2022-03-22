import React from 'react';

import Ad from './components/Ad';
import Counter from './components/Counter';
import Feed from './components/Feed';
import Api from './components/Api';

import './App.css';

export default function App(props) {
  return (
    <div className="App">
      <Counter></Counter>
      <Ad id={ 1 }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Ad>
      <Ad id={ 2 }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Ad>
      <Feed />
      <Api />
    </div>
  );
};