import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import ImgDes from "../componant/ImgDes";
import ImgDes2 from "../componant/ImgDes2";
import BackdropExample from "../func/modal1";



const PlansMenu = () => {

    const [data,setData] = useState([])
    const [tr,setTr] = useState(false)

    function getData(url){
        return axios.get(url)
    }
    async function dd(){
        let ndata = await  getData("https://api.edamam.com/search?q=burger&app_id=4e9f05eb&app_key=9b904d703fa0d46a88ce1ac63f29f498")
        console.log(ndata.data.hits)
        setData(ndata.data.hits)
        setTimeout(() => {
            setTr(true)
        }, 1500);

    }

    useEffect(()=>{
       dd()
    },[])
    

   




    return (
        <Box mt="100px" textAlign="center" >

        <Image  m="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="image" ></Image>
        <Text fontSize={["md","lg","2xl","4xl"]} textAlign="center" fontWeight="bold" >Flexible plans that fit your life</Text>
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
            <Box marginBottom={["250px","120px","100px","90px"]} textAlign="center" >
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" alt="reci" ></Image>
                <Text fontSize={["2xl","4xl"]} color="#3d7e83" fontWeight="semibold" >12 Meals</Text>
            </Box>
        </SimpleGrid>

        <Text textAlign="center" >Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
       <Link to={"/signup"} > <Button mt="30px" size="lg" color="white" bgColor="#3167ff" >Get Started</Button> </Link>
       {/* all items */}
       <SimpleGrid p="10%" columns={["1","1","2","3","4"]} gap="40px" >
        
       { !tr && <Spinner size="xl" m="auto"   color='red.500' /> }
            { tr && data.map((ele)=>{
                const el = ele.recipe
                return <BackdropExample key={el.label} title={el.label} des={el.source} img={el.image} >  <Box  > <Image borderRadius="20px" w="100%" h="80%" src={ el.image } alt="pic1" ></Image> <Text fontSize={["xl","2xl"]} >{ el.label }</Text>  </Box></BackdropExample>
            }) }
       </SimpleGrid>
       

        <Text mt="100px" fontSize="5xl">On the Menu</Text>
        <Container  >
        Whatever your lifestyle, Freshly’s got  you covered—with <u> gluten-free, dairy-free, plant-based, carb-smart, </u>and <u>calorie-conscious </u>meal options! Our heat-&-eat breakfasts, low-lift lunches, and done-for-you dinners provide an effortless alternative to everyday cooking, with nutritious prepared meals delivered fresh to your door. Explore this week’s dishes and start eating better:
       </Container>

       <Box lineHeight="120px" bgColor={"#fffdf7"} >
       <Text  fontSize={["2xl","3xl","6xl"]}  fontWeight="semibold" >For Every Diet & Lifestyle</Text>
       <Text lineHeight="base" w="55%" m="auto" >We’re here to make every dish delicious and nutritious, with prepared meals that satisfy a wide range of tastes—all meticulously crafted to meet your dietary wants and needs.</Text>

        <ImgDes2/>

       </Box>

       <br/>
       <br/>
       <br/>
       <Text fontSize={["xl","2xl","5xl"]} >Common Questions</Text>
       <Box w="75%" m="auto" >
        {/* menu */}
        
        {/* menu */}

       <Divider />
       </Box>



        </Box>
    )
};


export default PlansMenu;