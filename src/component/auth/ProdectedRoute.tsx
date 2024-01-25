import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

interface IProps {
children:ReactNode;
redirctPath:string;
isAllowed:boolean;
}


export const ProdectedRoute = ({children,redirctPath,isAllowed} : IProps) => {
    if(isAllowed) return <Navigate to={redirctPath}/>
    
    
    return children


}