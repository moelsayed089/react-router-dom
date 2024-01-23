import Button from "../component/ui/Button"
import { Textarea } from "../component/ui/Textarea"


export const ContributePage = () => {
  return (
    <div className="space-y-4 ">
      <h2 className="text-center ">Issue: 🐛 Bug Report</h2>
      <form className="max-w-sm mx-auto">
        <Textarea/>

        <Button>Submit</Button>
      </form>

    </div>
    

  )
}
