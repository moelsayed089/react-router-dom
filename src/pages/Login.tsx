

import { useLocation } from "react-router-dom"
import Button from "../component/ui/Button"
import { Input } from "../component/ui/Input"

export const LoginPage = () => {

  const {state} = useLocation()
  console.log(state)

  return (
    <div  className="mt-[30px]">
      <h2 className="text-center mb-2 font-medium">Login to Contribute</h2>
      <form className=" space-y-3 max-w-sm mx-auto" >
        <Input placeholder="Enter your name"/>
        <Input placeholder="Enter your Password"/>
        <Button>login</Button>

      </form>
    </div>
  )
}
