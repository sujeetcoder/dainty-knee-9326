import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import CommonQ from "../componant/CommonQ";




const Gift = () => {



    return (
        <Box width="100%" textAlign="center" >
            <SimpleGrid w="100%"   columns={[1,1,1,2,2]} gap="20px" >
                <Box lineHeight="60px" textAlign="start" p="100px 15%" >
                    <Text w="80%" fontSize={["md","lg","3xl","4xl","5xl"]} ><b>Enjoy the Gift of Effortless Meals</b></Text>
                    <Button bgColor="#3167ff" >Buy Gift Card</Button> <br/>
                    <Button colorScheme='teal' variant='outline' >Redeem Gift Card</Button>
                </Box>
                <Box>
                    <Image w="100%" h="450px"  src="https://static.toiimg.com/photo/89946526.cms" ></Image>
                </Box>
            </SimpleGrid>
            <Text mt="40px" fontSize={["md","lg","3xl","4xl","5xl"]} ><b>Enjoy the Gift of Effortless Meals</b></Text>
            <Text fontSize="xl" ><b> (Yes, It's Freshly.)</b></Text>
            <br/>
            <br/>
            <SimpleGrid columns={[1,1,1,3,3]} gap="20px" >
            <Box  lineHeight="60px" textAlign="center"  >
                 <Image m="auto" w="40%" h="35%"  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268348095d1df7966f8012b_Gift_Illo_1.png" alt="pic" ></Image>
                 <Text fontSize="md" > <b> Step  1</b></Text>
                 <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} >You'll Choose the Amount </Text>
                 <Text lineHeight="base" m="auto" w="60%" h="10px" >Purchase a gift card for someone special and we’ll send it to them. </Text>
             </Box>
             <Box  lineHeight="60px" textAlign="center"  >
                 <Image m="auto" w="40%" h="30%"  src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg" alt="pic" ></Image>
                 <Text fontSize="md" > <b> Step  2</b></Text>
                 <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > They'll Select Their Meals </Text>
                 <Text lineHeight="base" m="auto" w="60%" h="10px" >Your gift card's recipient will choose their meals and select their delivery day. </Text>
             </Box>
             <Box  lineHeight="60px" textAlign="center"  >
                 <Image m="auto" w="40%" h="35%"  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268349f5f123b16a40855f7_Gift_Illo_3.png" alt="pic" ></Image>
                 <Text fontSize="md" > <b> Step  3</b></Text>
                 <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > We’ll Cook & Deliver </Text>
                 <Text lineHeight="base" m="auto" w="60%" h="10px" >We’ll prepare their meals and deliver them fresh—right to their door. </Text>
             </Box>
            </SimpleGrid>
            <Text fontSize="xl" mt="50px" fontWeight="bold">Quick Tip: a $50 gift card = 4 meals!</Text>
            <Text fontSize="xl" >(on a 6-meal plan)</Text>
            <br/>
            <br/>
         <Link to={"/plansmenu"} >   <Button size="lg" color="white" bgColor="#3167ff " >Buy Gift Card</Button> </Link>

            <Box mt="70px" >
            <Image  m="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="image" ></Image>
        <Text fontSize={["md","lg","2xl","4xl"]} textAlign="center" fontWeight="bold" >Flexible plans that fit your life</Text>
        <Text textAlign="center" m="auto" w="60%" >We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause or change your plan at any time.</Text>

 {/* third */}
        <SimpleGrid w="85%" margin="auto" mt="20px"   columns={[1,2,2,3,5]} spacing='3%'  justify="space-around"   >
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">4-5 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">6-7 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">8-9 Meals</Text>
            </Box>
            <Box textAlign="center">
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold">10-11 Meals</Text>
            </Box>
            <Box marginBottom={["250px","120px","100px","90px"]} textAlign="center" >
                <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold" >12 Meals</Text>
            </Box>
        </SimpleGrid>
            </Box>

            {/* commoon */}
            <CommonQ/>
            
        </Box>
    )
}


export default Gift;