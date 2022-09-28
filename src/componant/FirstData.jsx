import { Box, Image, Text } from "@chakra-ui/react"


const FirstData = (props) => {
    const {title,img,des} = props

    return (
        <Box key={title} >
            <Image borderRadius="20px" src={img} alt="pic"></Image>
            <Text fontSize="lg" >{title} </Text>
            <Text color="#3d7e83" >{des} </Text>
        </Box>
    )
}


export default FirstData;