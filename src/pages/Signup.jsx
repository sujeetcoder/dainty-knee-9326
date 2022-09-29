import { Box, Button, Container, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useContext, useRef, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AppContext";



const initData = {
    email:"",
    zip:""
}

const Signup = () => {
    const {isAuth,toggleAuth} = useContext(AuthContext)
    const [user,setUser] = useState(initData)
    const {email,zip} = user
    const navigate = useNavigate()

   
    function changeUser(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    function signUp(){
        if(email==""||zip==""){
            alert("wrong input")
            return
        }
       localStorage.setItem("user",JSON.stringify(user))
        navigate("/login")
    }


    return (
        
    <Container padding='40px' id="you2" maxW='full' bg='blue.600' centerContent>
        <Box textAlign="start" padding='50px' bg='white' opacity="0.8" color='black' maxH="full" maxW='full'>
          <Text fontSize="4xl" ><b> Dinner’s ready! </b></Text>
          <Text fontSize="2xl" >Chef-prepared, healthy meals delivered weekly</Text> <br/><br/>
{/* all items */}
            <Flex gap="30px" >
            <Input onChange={changeUser}  name="email" value={email} w="40%" focusBorderColor='pink.400' placeholder='you@gmail.com' />
            <Input type="number" onChange={changeUser}  name="zip" value={zip} w="30%" focusBorderColor='pink.400'  placeholder='ZIP' />   
            <Button onClick={signUp} size="md" style={{width:"30%",backgroundColor:"#3167ff",color:"white",}}  >Continue</Button> 
            </Flex> <br/>
            <Text> Already have an account? <Link to={"/login"} > <u> Log in. </u></Link></Text>
            <Text>By continuing, you agree to our<u> Terms </u>  and<u> Privacy Policy</u> & will receive emails from Freshly.</Text>
        </Box>
    </Container>

    )
}

export default Signup;