import {Login} from "./components/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import {Register} from "./components/Register.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard"
                       element={
                           <ProtectedRoute>
                               <Dashboard/>
                           </ProtectedRoute>
                       }/>
            </Routes>
        </BrowserRouter>
    )
}