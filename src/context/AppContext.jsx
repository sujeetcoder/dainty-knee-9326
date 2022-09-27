import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";


export const AuthContext = createContext()


const AuthContextProvider = ({children})=>{

    const [isAuth,setIsAuth] = useState(true)

   

    return <AuthContext.Provider value={ {isAuth,setIsAuth }} >{ children }</AuthContext.Provider>

}

export default AuthContextProvider;
