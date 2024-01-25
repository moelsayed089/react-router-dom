

interface IProps  {
statusCode?: number;
title?: string;
}
export const ErorrProdectHandel = ({ statusCode=500, title = "Server Error"}:IProps) => {

  return (
    <div className="flex justify-center items-center fixed inset-0">
            <h1 className="text-center text-4xl"> 
                <span className="text-indigo-800 text-6xl">{statusCode}</span> {title}</h1>
    </div>
  )
}
