import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"


export const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
