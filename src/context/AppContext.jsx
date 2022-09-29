import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";



export const AuthContext = createContext()
function getLog(){
 let log = localStorage.getItem("login") || false
 if(typeof log == "string"){
    if(log=="false"){
        log = false
    } else if(log=="true"){
        log = true
    }
 }

 return log
}

const AuthContextProvider = ({children})=>{
   

    const [isAuth,setIsAuth] = useState(getLog())
    console.log(isAuth)
    

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

   

    return <AuthContext.Provider value={ {isAuth,setIsAuth,toggleAuth }} >{ children }</AuthContext.Provider>

}

export default AuthContextProvider;
