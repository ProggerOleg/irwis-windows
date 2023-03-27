import './App.css';
import { useState } from 'react';

import Footer from '../appFooter/appFooter';
import Header from '../appHeader/appHeader';


function App() {
  const [items, setItems] = useState([])


  return (
    <div className='wrapper'>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
