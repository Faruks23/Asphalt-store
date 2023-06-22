import { useState } from 'react'
import Header from './Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer/Footer';

function App() {
 const [position, setPosition] = useState(0);


 

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
