import { Box, Flex, Spacer, Image, useMediaQuery, IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')

   

    return (
        <>
        <Link to={"/"} >
        <Image w="4%" margin="auto" marginTop="12px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="image" />
        </Link>
        <Flex   style={{fontWeight: "500"}} /* pos="sticky"  w="full" h="70px" top="0px" */ paddingTop={"17px"} bgColor={"#fffdf7"}  >
            
            <Box  marginLeft={"4%"}>
            <Link to={"/"} >
                <Image w="32%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="image" />
            </Link>
            </Box>
            <Spacer/>

           { navSmall && <Box display="flex" alignItems='baseline' gap="15px">
                <Link to={"/plansmenu"} >Plans & Menu</Link>
                <Link to={"/howitwork"} >How it Works</Link>
                <Link to={"/gift"} >Gift</Link>
                <Link  >Refer a Friend</Link>
                <Link to={"/help"} >Help</Link>
            
            </Box>
            }
            <Spacer/>

            { navSmall &&  <Box  marginRight={"4%"} display='flex' alignItems='baseline' gap="15px">
            <Link to={"/login"}>Login</Link>
            <Link  style={{ backgroundColor: "#3167ff",color:"white",width:"90px",height:"35px",borderRadius:"0px",textAlign:"center", }} to={"/signup"} >Sign Up</Link>
            </Box>
            
            }
            { 
            !navSmall && <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
               variant='outline'
              />
            <MenuList>
              <MenuItem> <Link to={"/plansmenu"} >Plans & Menu</Link></MenuItem>
              <MenuItem><Link to={"/howitwork"} >How it Works</Link></MenuItem>
              <MenuItem><Link to={"/gift"} >Gift</Link></MenuItem>
              <MenuItem><Link  >Refer a Friend</Link></MenuItem>
              <MenuItem>  <Link to={"/help"} >Help</Link></MenuItem>
              <MenuItem><Link to={"/login"}>Login</Link></MenuItem>
              <MenuItem> <Link  style={{ backgroundColor: "#3167ff",color:"white",width:"90px",height:"35px",borderRadius:"0px",textAlign:"center", }} to={"/signup"} >Sign Up</Link></MenuItem>
            </MenuList>
          </Menu>

            }
            
        </Flex>
        </>
    )

}

export default Navbar;