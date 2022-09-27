import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext} from "../context/AppContext"

export default function ({children}) {

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

    return children
}