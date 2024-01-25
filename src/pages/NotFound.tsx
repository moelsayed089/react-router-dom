import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
      <div className="flex flex-col justify-center items-center fixed inset-0">
          <h1 className="text-center text-4xl"> 404</h1>
          <p className="mb-2 text-2xl font-bold text-center  md:text-3xl">
              <span className="text-red-500">Oops!</span> <span>Page not found</span>
          </p>
          <p className="mb-8 text-center md:text-lg">The page you’re looking for doesn’t exist.</p>
          <Link to={'/'} className=" bg-[#149eca] inline-block text-white py-2 px-3 rounded-md "> Back Home</Link>
      </div>
  )
  
}
