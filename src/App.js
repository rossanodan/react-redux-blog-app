import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeadLine from './components/HeadLine/HeadLine';

const tempArray = [{
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joe@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine header="Posts" description="Click the button to render posts." tempArray={tempArray} />
      </section>
    </div>
  );
}

export default App;
