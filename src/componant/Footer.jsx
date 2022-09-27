import { Box, Flex, Spacer, Image, Text } from "@chakra-ui/react";
import footer1 from "../img/footer1.png"




const Footer = () => {



    return (
        <Flex lineHeight={"35px"} paddingTop="80px" border={"1px solid black"} >
             <Spacer/>
            
            <Box >
            <Image w="32%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="image" />
            <Text>© Freshly Inc.</Text>         
            </Box>
            <Spacer/>

            <Box>
                <Text fontSize={"2xl"}>Company</Text>
           <Text > Careers</Text>
            <Text>Contact Us</Text>
            <Text>Press</Text>
            <Text>Terms</Text>
            <Text> Privacy </Text>
            <Text> Affiliates </Text>
            <Text>Partnerships</Text>
            </Box>
            <Spacer/>

            <Box>
                <Text fontSize={"2xl"} >Learn More</Text>
                <Text>Plans & Menu</Text>
                <Text>Why Freshly?</Text>
                <Text>Gifts</Text>
                <Text>FAQs</Text>
                <Text>Blog</Text>
                <Text>Students</Text>
            </Box>
            <Spacer/>
            
            <Box>
            <Text fontSize={"2xl"}>Join Us</Text>
            <Image src={footer1} ></Image>
                
            </Box>
           
            <Spacer/>
            <Spacer/>
        </Flex>
    )
}

export default Footer;