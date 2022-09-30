import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import CommonQ from "../componant/CommonQ"
import { AuthContext } from "../context/AppContext"

const initData = {
    email:"",
    zip:""
}

const Login = () => {

    const [user,setUser] = useState(initData)
    const {email,zip} = user
    const navigate = useNavigate()
    const {isAuth,toggleAuth} = useContext(AuthContext)

    if(isAuth){
      return <Navigate to={"/"}/>
    }

   
    function changeUser(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    function toggleLogin(e){
        e.preventDefault()
      const login = JSON.parse(localStorage.getItem("user")) || { email:"",zip:"" }
      if(login.email==user.email && login.zip==user.zip){
        toggleAuth()
        setUser(initData)
       localStorage.setItem("login",true)
        navigate("/plansmenu")
        
      } else {
        alert("Wrong credential")
        console.log(login)
        console.log(user)
      }
      console.log("heelo")
    }




    return (
      <>
        <Box bgColor="#fffdf7" padding="10px 30%" >
            <Box>
            <Text fontSize="5xl" textAlign="center"><b>Log In </b></Text>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input  onChange={changeUser}  name="email" value={email} placeholder='Email' />
              <FormLabel>ZIP</FormLabel>
              <Input type="number" onChange={changeUser}  name="zip" value={zip} placeholder='ZIP' />
              <Input onClick={toggleLogin}  mt="25px" bgColor="#2a6dff" color="white" type="submit" />
            </FormControl>
            </Box>
            <Text mt="25px" textAlign="end" > Don’t have an account?<Link to={"/signup"} ><u> Get Started </u> </Link> </Text>

            <br/>
        </Box>
            <CommonQ/>
            </>
    )
}


export default Login