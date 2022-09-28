import { Box, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";


const PagenotFound = () => {


    return (
        <Box w="full" h={"500px"} >
            <Text style={{ textAlign:"center",color:"red", fontSize:"200%"  }} mt="10%" >404 Page Not Found</Text>
            <Text  style={{ textAlign:"center",color:"green" }}  >Click here for homepage <Link to={"/"}> <Button>Homepage</Button></Link> </Text>
        </Box>
    )
}

export default PagenotFound;