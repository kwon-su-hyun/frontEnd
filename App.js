import React, { Component, useState } from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import Footer from './Footer';

function App() { 
  return (
    <div>
        <Header />
        <Counter />
        <Footer />
    </div>
  );
}

export default App;
