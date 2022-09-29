import { Box, Button, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import footer1 from "../img/footer1.png"
import "../App.css"

import firstData from "../compData/firstData";
import FirstData from "./FirstData";
import { Link } from "react-router-dom";


const OntheMenu = () => {




    return (
        <Container padding='40px' id="you" maxW='full' bg='blue.600' centerContent>
        <Box padding='40px' bg='white' color='black' maxH="full" maxW='3xl'>
          <Text fontSize="6xl" >On the menu</Text>
          <Text fontSize="xl" >Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</Text>
{/* all items */}
            <SimpleGrid mt="20px"   columns={[1,2,2,2,3]} spacing='3%'  justify="space-around">
                {
                    firstData?.map((el)=>{
                        return <FirstData key={el.title}  {...el} />
                    })
                }


            </SimpleGrid>

            
            <Link to={"/plansmenu"} >  <Button size="lg" style={{width:"90%",backgroundColor:"#3167ff",color:"white",marginLeft:"5%" }} mt={["340px","100px","80px","80px"]} >View Plans & Menu</Button>  </Link> 
        </Box>
      </Container>
    )
}


export default OntheMenu;