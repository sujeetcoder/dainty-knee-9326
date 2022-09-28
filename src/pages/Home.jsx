import { Box, Button, Container, Image, Input ,Text} from "@chakra-ui/react"
import homeTop from "../img/homeTop.png"



const Home = ()=>{

    

    

    return (
        <>
        <Box  width={"100%"} height="630px">
        <Image w="100%" height="100%" src={homeTop} alt="home"></Image>
       
        </Box>
        <Text fontSize={"5xl"} fontWeight="semibold" textAlign="center" >How it Works</Text>
        </>
    )

       
   
}

export default Home