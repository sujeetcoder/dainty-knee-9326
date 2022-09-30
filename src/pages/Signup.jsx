import { Box, Button, Container, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useContext, useRef, useState } from "react";
import { json, Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AppContext";
import CommonQ from "../componant/CommonQ.jsx"



const initData = {
    email:"",
    zip:""
}

const Signup = () => {
    const {isAuth,toggleAuth} = useContext(AuthContext)
    const [user,setUser] = useState(initData)
    const {email,zip} = user
    const navigate = useNavigate()

    if(isAuth){
        return <Navigate to={"/"}/>
      }

   
    function changeUser(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    function signUp(){
        let localUser = JSON.parse(localStorage.getItem("user")) || initData
        if(email==""||zip==""){
            alert("Wrong input formate")
            return
        } else if(email==localUser.email){
            alert("user allready exist")
            navigate("/login")
            return
        }
       localStorage.setItem("user",JSON.stringify(user))
        navigate("/login")
    }


    return (
        <Box>
        
         <Container padding='40px' id="you2" maxW='full' bg='blue.600' centerContent>
          <Box textAlign="start" padding='50px' bg='white' opacity="0.8" color='black' maxH="full" maxW='full'>
          <Text fontSize="4xl" ><b> Dinner’s ready! </b></Text>
          <Text fontSize="2xl" >Chef-prepared, healthy meals delivered weekly</Text> <br/><br/>
{/* all items */}
            <SimpleGrid columns={[1,1,3,3,3]} gap="30px" >
            <Input onChange={changeUser}  name="email" value={email} /* w="40%" */ focusBorderColor='pink.400' placeholder='you@gmail.com' />
            <Input type="number" onChange={changeUser}  name="zip" value={zip} /* w="30%" */ focusBorderColor='pink.400'  placeholder='ZIP' />   
            <Button onClick={signUp} size="md" style={{/* width:"30%", */backgroundColor:"#3167ff",color:"white",}}  >Continue</Button> 
            </SimpleGrid> <br/>
            <Text> Already have an account? <Link to={"/login"} > <u> Log in. </u></Link></Text>
            <Text>By continuing, you agree to our<u> Terms </u>  and<u> Privacy Policy</u> & will receive emails from Freshly.</Text>
            </Box>
        </Container>
        <CommonQ/>
    </Box>
    )
}

export default Signup;