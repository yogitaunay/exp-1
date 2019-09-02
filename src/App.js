import React from 'react';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Bodycontent from './components/Bodycontent';

function App() {
  return (
    <div className="App mx-5 appmx">
      <Header />
      <Body />
      <Bodycontent promoMonth="Agustus" promoWord="MERDEKA!!!" />
    </div>
  );
}

export default App;
