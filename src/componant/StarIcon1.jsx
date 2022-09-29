import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Flex, Image, SimpleGrid, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import strData from "../compData/strData"




const StarIcon1 = () =>{
    const [count,setCount] = useState(0)
    const [smScreen] = useMediaQuery('(min-width: 480px)')

    function ink(){
        setCount(count+1)
        console.log(count)
    }
    function dec(){
        setCount(count-1)
        console.log(count)
    }

    useEffect(()=>{
        if(smScreen){
            setCount(0)
        }   
    },[smScreen])


    return (
        <>
        { smScreen && <Flex justify="space-around" >
           <button disabled={count<1} onClick={()=>{dec()}} > <ArrowLeftIcon ></ArrowLeftIcon> </button>
            <SimpleGrid columns={[1,3,3,3,3]} spacing={10} w="80%" >
                <Box> <Image src={strData[count]} ></Image> </Box>
                <Box> <Image src={strData[count+1]} ></Image> </Box>
                <Box> <Image src={strData[count+2]} ></Image> </Box>
            </SimpleGrid>
            <button disabled={count>2} onClick={()=>{ink()}} > <ArrowRightIcon></ArrowRightIcon> </button>
        </Flex>}

        { !smScreen && <Flex justify="space-around" >
           <button disabled={count<1} onClick={()=>{dec()}} > <ArrowLeftIcon ></ArrowLeftIcon> </button>
            <SimpleGrid columns="1" spacing={10} w="80%" >
                <Box> <Image src={strData[count]} ></Image> </Box>
            </SimpleGrid>
            <button disabled={count>4} onClick={()=>{ink()}} > <ArrowRightIcon></ArrowRightIcon> </button>
        </Flex>

        }

        </>
    )
}


export default StarIcon1;