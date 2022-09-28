import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PagenotFound from "../pages/PagenotFound";
import PlansMenu from "../pages/PlansMenu";
import Signup from "../pages/Signup";
import PriveteRoute from "./PriveteRoute";



const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <PriveteRoute> <Home/> </PriveteRoute>} ></Route>
            <Route path="/login" element={ <Login/> } ></Route>
            <Route path="/plansmenu" element={ <PlansMenu/> }></Route>
            <Route path="/signup" element={ <Signup/> } ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
        </Routes>
    )
}

export default AllRoutes