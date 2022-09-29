import { Box, Button, Container, Flex, Image, Input ,SimpleGrid,Spacer,Text, useMediaQuery} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ImgDes from "../componant/ImgDes"
import OntheMenu from "../componant/OntheMenu"
import StarIcon1 from "../componant/StarIcon1"
import homeTop from "../img/homeTop.png"
import "../App.css"
import BackdropExample from "../func/modal1"



const Home = ()=>{

    const [smScreen] = useMediaQuery('(min-width: 532px)')

    

    return (
        <Box textAlign="center" width={"100%"} >
{/* first */}
        <Box  width={"100%"} >
        <Image w="100%" height="100%" src={homeTop} alt="home"></Image>
        </Box>
        {/* second */}

        <Box bgColor={"#fef9eb"} >
        <Text fontSize={["2xl","3xl","5xl"]} fontWeight="semibold" textAlign="center" >How it Works</Text>  
        {/* comp */}
        <ImgDes/>    
        {/* comp */} 
        </Box>
        {/* comp */}
        <OntheMenu/> 
        {/* comp */} 

        <Image m="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="image" ></Image>
        <Text fontSize={["md","lg","2xl","6xl"]} textAlign="center" fontWeight="bold" >Flexible plans that fit your life</Text>
        <Text textAlign="center" m="auto" w="60%" >We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause or change your plan at any time.</Text>

 {/* third */}
        <SimpleGrid w="85%" margin="auto" mt="20px"   columns={[1,2,2,2,5]} spacing='3%'  justify="space-around"   >
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
            <Box marginBottom={["230px","80px","30px","30px"]} textAlign="center" >
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold" >12 Meals</Text>
            </Box>
        </SimpleGrid>

        <Text textAlign="center" >Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
        <Link to={"/signup"} > <Button size="lg" bgColor="#3167ff" >Sign Up Now</Button> </Link>

{/* fourth */}
        <Text mt="70px" fontSize={["2xl","3xl","6xl"]} > <b> What Others Are Saying </b></Text>
        <StarIcon1/>  

{/* fifth */}  
        <Box  h={["200px","300px","350px","400px","600px"]} w="100%"  >
            <Image w="60%" h="100%" marginLeft="40%" src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=" ></Image>
            <Box textAlign="start" bg="#ffffff"  w="44%"  pos="relative" top={["-90%","-94%","-95%","-79%","-80%"]} left="8%" >
                <Text /* lineHeight="35px" */ fontSize={["xl","2xl","4xl"]}   > <b> We believe eating right should be easy for everyone. </b></Text>
               { smScreen && <Text><b>Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.  </b></Text>  }
              <Link to={"/howitwork"} >  <Button mt={["2px","5px","10px","20px","60px"]} size="lg" bgColor="#3167ff" color="white"  >Learn More</Button> </Link>
            </Box>
        </Box>

{/* sixth */}
        <Image mt="60px" w="65%" h={["30px","50px","130px"]} src="https://blog-images.pharmeasy.in/2020/10/16181407/shutterstock_1017075634-1.jpg" ></Image>
        <Flex textAlign="start" flexDirection={["column","column","row"]} gap="40px" >
            <Box> <Image src="https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/news/r-d/could-reframing-food-as-medicine-counter-rising-prices-that-are-pushing-healthier-options-out-of-reach/15800277-1-eng-GB/Could-reframing-food-as-medicine-counter-rising-prices-that-are-pushing-healthier-options-out-of-reach.jpg" ></Image> </Box>
            <Box>
                <Text mt="15px" fontSize={["xl","xl","2xl","5xl"]} >Healthy Meals Delivered Weekly</Text>
                <Input w="80%" focusBorderColor='pink.400' placeholder='you@gmail.com' />
                <Input w="80%" focusBorderColor='pink.400' marginTop="10px" placeholder='ZIP' /> <br/> <br/>
                <Button w="60%" colorScheme='blue' >Get Started</Button> <br/><br/>
                <Text> Already have an account? <Link to={"/login"} > <u> Log in. </u></Link></Text>
                <Text>By continuing, you agree to our<u> Terms </u>and<u> Privacy Policy. </u>& will receive emails from Freshly.</Text>
            </Box>
        </Flex>
        <Image id="rotate" mt="10px" w="65%" h={["30px","50px","130px"]} src="https://image.shutterstock.com/image-photo/superfoods-on-white-background-organic-260nw-794145988.jpg" ></Image>
        
        {/* last */}
        <SimpleGrid bgColor="#ffffff" p={["70px","90px","70px","60px"]} mt="60px" columns={[1,1,2,3,6]} gap={["3%","2%","23%","15%","4%"]} >
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e435aee2e3a4ab03e6f_The_Huffington_Post_logo.svg" ></Image> </Box>
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e412d98cd166a6c84e6_logo-header.64f3bdc15b1f321829f9f30c7853a1469f469d71.svg" ></Image></Box>
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e436b26e00a240533b1_Entrepreneur-01.svg" ></Image></Box>
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e432759db28ffaf924f_w-g-logo-black.svg" ></Image></Box>
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523f552759db186baf93d2_techcrunch-seeklogo.com%20%5BConverted%5D.svg" ></Image></Box>
          <Box>  <Image w="100%" h="100%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e434bbecc1909457f48_logo-header.aeb2e510354d524c42a87c5d0a97d0a73c5d7581.svg" ></Image></Box>
           

        </SimpleGrid>
        




        {/* last */}
        </Box>
    )

       
   
}

export default Home