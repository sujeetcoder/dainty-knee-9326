import { Box, Flex, Spacer, Image, useMediaQuery, IconButton, Button } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
   
  } from '@chakra-ui/react'

  import {  HamburgerIcon } from '@chakra-ui/icons'
import { useContext } from "react"
import { AuthContext } from "../context/AppContext"


const Navbar = () => {
    const [navSmall] = useMediaQuery('(min-width: 800px)')
    const {isAuth,toggleAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    function toggleClick(isAuth){
        if(isAuth){
          console.log(isAuth)
         localStorage.setItem("login",false)
            toggleAuth()
          
        } else {
            navigate("/signup")
        }
    }

   

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
            <Link to={"/login"}> {!isAuth?"Login":"" } </Link>
            <Button onClick={()=>toggleClick(isAuth)} style={{ backgroundColor: "#3167ff",color:"white",borderRadius:"5px",textAlign:"center"}}> {!isAuth?"Sign Up":"Log Out" } </Button> 
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
              <MenuItem> <Link to={"/help"} >Help</Link></MenuItem>
              <MenuItem><Link to={"/login"}> {!isAuth?"Login":"" } </Link></MenuItem>
              <MenuItem onClick={()=>toggleClick(isAuth)} style={{ backgroundColor: "#3167ff",color:"white",borderRadius:"5px",textAlign:"center",width:"40%"}}> {!isAuth?"Sign Up":"Log Out" } </MenuItem>
            </MenuList>
          </Menu>

            }
            
        </Flex>
        </>
    )

}

export default Navbar;