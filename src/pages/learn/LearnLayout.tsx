import { Outlet } from "react-router-dom"
import { LearnAside } from "../../component/LearnAside"
import Navbar from "../../component/Navbar"

export const LearnLayout = () => {
  return <>

      <LearnAside/>
      
        <div className="ml-72">
            <Navbar />
            <Outlet />
        </div>
   
  </>
}
