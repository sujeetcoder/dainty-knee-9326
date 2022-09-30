import { Box, Divider, Text } from "@chakra-ui/react"



const CommonQ = ()=> {




    return (
        <Box border="1px solid red" margin="auto" w="80%" textAlign="center" >
            <br/>
            <br/>
            <br/>
            <Text fontSize={["xl","2xl","5xl"]} > <b> Common Questions </b></Text>
            <Box w="75%" m="auto" >
        {/* menu */}
           
                <ul>
                    <li>hello</li>
                    <li>you lo</li>
                </ul>
           
        
        {/* menu */}

             <Divider />
            </Box>
        </Box>
    )
}


export default CommonQ;