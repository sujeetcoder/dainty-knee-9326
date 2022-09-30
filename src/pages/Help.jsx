import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Flex, IconButton, Input, SimpleGrid, Text } from "@chakra-ui/react"

const buttData = [
    "What is Freshly?",
    "How Does Your Service Work?",
    "Meal Plans & Pricing",
    "About the Meals",
    "Dietary & Nutritional Information",
    "Packaging & Recycling",
    "Managing My Subscription",
    "All Things App",
    "Managing an Order",
    "Payment & Promotions",
    "Delivery & Shipping",
    "Technical Support"
]


const Help = () => {



    return (
        <Box w="100%" >
            <Container id="you3" maxW='full' h="300px" maxH="full" bg='blue.600' centerContent>
                 <Box padding='4' bg='transparent' color='black' w="60%" maxW='full'>
                   <Flex w="100%" marginTop={"14%"}>
                         <IconButton borderRadius="5px 0px 0px 5px" bgColor="white" aria-label='Search database' icon={<SearchIcon />} />
                         <Input borderRadius="0px 5px 5px 0px" bgColor="white" placeholder='Search' />
                    </Flex>
                </Box>
            </Container>
            {/* second */}
            <Box>
            <SimpleGrid padding="100px 10%" columns={[1,1,2,3,3]} gap="50px 3%" >
                {
                    buttData.map((el)=>{
                        return <Button colorScheme='green' variant='outline' key={el} > {el} </Button>
                    })
                }
                

            </SimpleGrid>
            <Button colorScheme='green' variant='outline'  size="lg" ml="10%" w="80%"  >Our Commitment to Food Safety</Button>
            </Box>

            <Box padding="100px 10%" textAlign="start" >
                <Text fontSize="2xl" >Promoted articles</Text>
                <SimpleGrid mt="20px" columns={[1,1,2,3,3]} gap="30px 3%">
                    <Box>
                        <Text>What's Freshly?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>What should I know before I order?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>How much do your meal plans cost?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>How many servings are in a meal?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>How do I heat up my meals?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>Do the meals have a use-by date, and can I freeze my meals?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>Where are your meals cooked?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>What am I committing to with a subscription?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>How do I cancel a subscription?</Text>
                        <Divider />
                    </Box>
                    <Box>
                        <Text>Where do you deliver?</Text>
                        <Divider />
                    </Box>
                </SimpleGrid>

            </Box>



        </Box>
    )
}

export default Help;