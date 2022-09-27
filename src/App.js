
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import Navbar from './componant/Navbar';
import Footer from './componant/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
