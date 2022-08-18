import { Routes, Route, Navigate } from 'react-router-dom'
import { Users, Dashboard } from "../Pages"

const MainContent = () => {
    return (
        <Routes>
            <Route path={`/dashboard`} element={<Dashboard />} />
            <Route path={`/users`} element={<Users/>} />
            <Route path={`/`} element={<Navigate replace to="/dashboard" />} />
            {/* <Route path={`/fancy`} component={dashboardRoutes.FancyDriversTable} /> */}
        </Routes>
    )
}

export default MainContent


