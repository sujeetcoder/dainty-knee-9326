import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import "../App.css"



const ImgDes2 = () => {

    


    return (
        <SimpleGrid columns={[1,2,2,3,5]} spacing='2%'  justify="space-around" w="80%"  m="auto" >
        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="100%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg" alt="pic" ></Image>
        <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > Choose Your Meals </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Rotating menu of 50+ balanced dishes. </Text>
        <Link id="learn"  to={"/"} > <p style={{ marginTop:"60px" }} > learn More </p></Link>
        </Box>

        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="100%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg" alt="pic" ></Image>
        <Text lineHeight={["base","base","base","base","60px"]}  fontSize='2xl'> We Cook & Deliver </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Fully-cooked meals sent fresh, not frozen. </Text>
        <Link id="learn"  to={"/"} > <p style={{ marginTop:"60px" }} > learn More </p></Link>
        </Box>

        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="100%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg" alt="pic" ></Image>
        <Text lineHeight={["base","base","base","base","60px"]}  fontSize='2xl'> Chill & Reheat </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Refrigerate meals & reheat in 3 minutes. </Text>
        <Link id="learn"  to={"/"} > <p style={{ marginTop:"60px" }} > learn More </p></Link>
        </Box>

        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="100%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg" alt="pic" ></Image>
        <Text lineHeight={["base","base","base","base","60px"]}  fontSize='2xl'>Eat & Repeat</Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Change meals, skip a week, or cancel any time. </Text>
        <Link id="learn"  to={"/"} > <p style={{ marginTop:"60px" }} > learn More </p></Link>
        </Box>

        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="100%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg" alt="pic" ></Image>
        <Text lineHeight={["base","base","base","base","60px"]}  fontSize='2xl'>Eat & Repeat</Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Change meals, skip a week, or cancel any time. </Text>
        <Link id="learn"  to={"/"} > <p style={{ marginTop:"60px" }} > learn More </p></Link>
        </Box>

        </SimpleGrid>
    )
}

export default ImgDes2;