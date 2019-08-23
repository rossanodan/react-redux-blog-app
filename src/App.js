import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeadLine from './components/HeadLine/HeadLine';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Posts" description="Click the button to render posts." />
      </section>
    </div>
  );
}

export default App;
