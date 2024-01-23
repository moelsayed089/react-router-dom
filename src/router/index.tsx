
import {  Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { RootLayout } from "../pages/Layout";
import { HomePage } from "../pages";
import { ContactPage } from "../pages/Contact";
import { AboutPage } from "../pages/About";
import { QuickStartPage } from "../pages/learn";
import { LearnLayout } from "../pages/learn/LearnLayout";
import { ThinkinginReact } from "../pages/learn/Thinking in React";
import { Tutorial } from "../pages/learn/Tutorial";
import { ContributePage } from "../pages/ContributePage";
import { LoginPage } from "../pages/Login";





const router = createBrowserRouter(
    createRoutesFromElements(<>
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
            <Route path="contribute" element={<ContributePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
    </Route>


        <Route path="/learn" element={<LearnLayout />}>
            <Route index element={<QuickStartPage />} />
            <Route path="thinking_in_react" element={<ThinkinginReact/> } />
            <Route path="tutorial" element={<Tutorial/>} />
        </Route>
</>
    )
);

export default router;