import { Box, Button, Container, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"



function BackdropExample({children,title,img,des}) {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Box
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         {children}
        </Box>
       
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader> {title} <br/> <Text fontSize="sm" color="green.500" > with Seasoned Beef & Masterful Mash </Text> </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex gap="25px" >
                    <Box>
                        <Image src={img} ></Image>
                    </Box>
                    <Box>
                        <Text fontSize={"xl"} color="red.500" >{title}</Text>
                        <Text color="blue.500" > {des} </Text>
                    </Box>
                </Flex>
                <Container>
                Seared slices of succulent steak, topped with a classically melty cheese sauce

                Our sauce combines cheddar, pepper jack, and hidden veggie goodness from butternut squash

                All on a classic combo of sautéed onions and tricolor bell peppers

                Served with Masterful Mash—a blend of creamy cauliflower and potato—as an alternative to a traditionally carb-heavy hoagie roll

                A final sprinkle of mozzarella cheese
                </Container>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BackdropExample;