
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { Box, ChakraProvider, Container, Image } from '@chakra-ui/react';
import Navbar from './componant/Navbar';
import Footer from './componant/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <a href="https://support.freshly.com/hc/en-us">
    <img style={{position:"fixed",top:"640px",left:"89%",width:"90px",height:"90px" }} src='https://img1.wsimg.com/isteam/ip/1d1db971-fcee-43df-901e-44e0076ecd90/customer-service.png/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:365,h:365,cg:true,m/qt=q:25' alt="costomer" ></img>
    </a>
    
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
