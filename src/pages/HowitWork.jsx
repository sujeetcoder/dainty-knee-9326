import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react"



const HowitWork = () => {


    return (
        <Box w="100%" textAlign="center" >
           <Text mt="40px" fontSize={["xl","2xl","2xl","4xl","5xl"]} > <b> About Freshly </b></Text>
           <Text mt="120px" fontSize={["xl","2xl","2xl","3xl","4xl"]} > <b> Heat-and-eat in 3 minutes or less </b></Text>
           <Text mb="40px" >See just how easy it is to prepare a chef-cooked Freshly meal</Text>

           {/* embed */}
         <Box  w="62%" h={["100px","150px","240px","400px","600px"]} m="auto" >  <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/llltuzvd35" width="100%" height="100%"></iframe> </Box>
           {/*embed */}

           <Text mt="120px" fontSize={["xl","2xl","2xl","3xl","4xl"]} > <b> Our Food Philosophy </b></Text>
           <Text mb="40px" >Our meals aren’t just ready in minutes... or just delicious... or just nutritious. They’re all three.</Text>

        <SimpleGrid w="80%" m="auto" columns={[1,1,3,3,3]}  gap={["8%","3%","12%","15%","4%"]}  >
        <Box  lineHeight="60%" textAlign="center"  >
        <Image w="40%" h="70%" m="auto"  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f0020df16335dbda1b6_gp-less-sugar-nocopy%402x.png" alt="pic" ></Image>
        <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > Choose Your Meals </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Rotating menu of 50+ balanced dishes. </Text>
        </Box>
        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="40%" h="70%" m="auto"  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00f6ed944c5e2f02a3_gp-less-processed-nocopy%402x.png" alt="pic" ></Image>
        <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > Choose Your Meals </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Rotating menu of 50+ balanced dishes. </Text>
        </Box>
        <Box  lineHeight="60px" textAlign="center"  >
        <Image w="40%" h="70%" m="auto"  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00a02e38947ec7759a_gp-more-nutrients-nocopy%402x.png" alt="pic" ></Image>
        <Text  fontSize='2xl' lineHeight={["base","base","base","base","60px"]} > Choose Your Meals </Text>
        <Text lineHeight="base" m="auto" w="60%" h="10px" >Rotating menu of 50+ balanced dishes. </Text>
        </Box>
        </SimpleGrid>

        <Button mt={["160px","150px",]} bgColor="#3167ff" >Learn More</Button> <br/>



        </Box>
    )
}

export default HowitWork;