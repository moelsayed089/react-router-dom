
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
import { ProdectedRoute } from "../component/auth/ProdectedRoute";
import { ErorrProdectHandel } from "../component/erorr/ErorrProdectHandel";
import { NotFoundPage } from "../pages/NotFound";



const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? null : { email: "email@gmail.com" };

const router = createBrowserRouter(
    createRoutesFromElements(<>
    <Route  path="/" element={<RootLayout/>}     > 
        <Route index element={<HomePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="about" element={<AboutPage/>}/>

            <Route
                path="contribute"
                element={
                    <ProdectedRoute isAllowed={isLoggedIn} redirctPath="/login" data={userData}>
                        <ContributePage />
                    </ProdectedRoute>
                } errorElement={<ErorrProdectHandel/>}
            />
            <Route 
                path="login"
                element={
                    <ProdectedRoute isAllowed={!isLoggedIn} redirctPath="/contribute" data={userData}>
                        <LoginPage />
                    </ProdectedRoute>
                } 
            />
    </Route>


        <Route path="/learn" element={<LearnLayout />}>
            <Route index element={<QuickStartPage />} />
            <Route path="thinking_in_react" element={<ThinkinginReact/> } />
            <Route path="tutorial" element={<Tutorial/>} />
        </Route>


        <Route path="*" element={<NotFoundPage/>}/>
</>
    )
);

export default router;