import { BrowserRouter, Routes, Route } from 'react-router-dom';

import All from './All';
import Search from './Search';
import Login from './Login';
import DashBoard from "./DashBoard"

function ReactRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />}>
                    <Route path="" element={<All />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default ReactRouter;