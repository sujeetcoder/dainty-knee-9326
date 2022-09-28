import { Box, Button, Container, Image, Input ,Text} from "@chakra-ui/react"
import homeTop from "../img/homeTop.png"



const Home = ()=>{

    

    

    return (
        <Box width={"100%"} /* height="560px" */ >
        <Box  width={"100%"} /* height={["25%","40%","60%","80%","100%"]} */>
        <Image w="100%" height="100%" src={homeTop} alt="home"></Image>
       
        </Box>
        <Text fontSize={["2xl","3xl","5xl"]} fontWeight="semibold" textAlign="center" >How it Works</Text>
        </Box>
    )

       
   
}

export default Home