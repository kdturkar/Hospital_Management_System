import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Random from '../Components/Sidebar/Random.tsx'
import AdminDashboard from '../Layout/AdminDashboard.tsx'
import LoginPage from '../Pages/LoginPage.tsx'
import RegisterPage from '../Pages/RegisterPage.tsx'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<AdminDashboard />}>
                    <Route path="dashboard" element={<Random />} />
                    <Route path="doctors" element={<Random />} />
                    <Route path="patients" element={<Random />} />
                    <Route path="appointments" element={<Random />} />
                    <Route path="pharmacy" element={<Random />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes