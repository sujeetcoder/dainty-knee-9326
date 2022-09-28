import { Box, Text } from "@chakra-ui/react"


const PagenotFound = () => {


    return (
        <Box w="full" h={"500px"} >
            <Text style={{ textAlign:"center",color:"red", fontSize:"200%"  }} mt="10%" >404 Page Not Found</Text>
        </Box>
    )
}

export default PagenotFound;