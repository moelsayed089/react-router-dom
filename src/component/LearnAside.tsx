import { NavLink } from "react-router-dom"

export const LearnAside = () => {
    return <>
        <aside className="  fixed top-0 left-0 w-64 ">
            <nav className=" my-5">
                <ul className="flex flex-col">
                    <li className="  w-full p-2  mb-2 duration-200 font-medium text-xl " >
                        <NavLink to="/learn" end={true}>Quick Start</NavLink>
                    </li>
                    <li className="  w-full p-2  mb-2 duration-200 font-medium text-2xl " >
                        <NavLink to="/learn/tutorial">Tutorial</NavLink>
                    </li>
                    <li className="  w-full p-2  mb-2 duration-200 font-medium text-2xl " >
                        <NavLink to="/learn/thinking_in_react">Thinking in React</NavLink>
                    </li>
                


                </ul>
            </nav>

        </aside>
    </>
}
