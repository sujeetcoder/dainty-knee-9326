import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext} from "../context/AppContext"

export default function ({children}) {

    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

    return children
}