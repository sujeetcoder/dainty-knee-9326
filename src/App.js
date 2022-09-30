
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { Box, Image } from '@chakra-ui/react';
import Navbar from './componant/Navbar';
import Footer from './componant/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Box  className="App">

    <Link to={"/help"} >
    <Image pos={"fixed"} top={["85%","85%","85%","86%"]} left={["70%","80%","85%","90%","92%"]} zIndex="40  " w="90px" h="90px"  src='https://img1.wsimg.com/isteam/ip/1d1db971-fcee-43df-901e-44e0076ecd90/customer-service.png/:/cr=t:9.68%25,l:9.68%25,w:80.65%25,h:80.65%25/rs=w:365,h:365,cg:true,m/qt=q:25' alt="costomer" ></Image>
    </Link>
    
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </Box>
  );
}

export default App;
