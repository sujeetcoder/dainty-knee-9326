import { Route, Routes } from "react-router-dom";
import Gift from "../pages/Gift";
import Help from "../pages/Help";
import Home from "../pages/Home";
import HowitWork from "../pages/HowitWork";
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
            <Route path="/signup" element={ <Signup/> } ></Route>
            <Route path="/plansmenu" element={ <PlansMenu/> }></Route>
            <Route path="/howitwork" element={ <HowitWork/> } ></Route>
            <Route path="/gift" element={ <Gift/> } ></Route>
            <Route path="/help" element={ <Help/> } ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
        </Routes>
    )
}

export default AllRoutes