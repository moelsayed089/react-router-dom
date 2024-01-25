import { useLocation } from "react-router-dom"
import Button from "../component/ui/Button"
import { Textarea } from "../component/ui/Textarea"


export const ContributePage = () => {

  const {state} = useLocation()
  console.log(state)
  
  return (
    <div className="space-y-4 ">

      <h2 className="text-center ">Issue:Bug Report</h2>
      <h2 className="text-center ">{state.email }</h2>
      <form className="max-w-sm mx-auto">
        <Textarea/>
        <Button>Submit</Button>
      </form>
    </div>
    
  )
}
