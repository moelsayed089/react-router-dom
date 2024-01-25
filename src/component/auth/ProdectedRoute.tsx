import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

interface IProps {
children:ReactNode;
redirctPath:string;
isAllowed:boolean;
data?:unknown; 
}


export const ProdectedRoute = ({children,redirctPath,isAllowed ,data} : IProps) => {
    if(isAllowed) return <Navigate to={redirctPath} replace state={data}/>
    
    
    return children


}