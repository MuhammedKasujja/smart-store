import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"


const MainContent: React.FC = () => {
    const [isOpen, setOpen] = useState(true)
    const toggleSidebar = () => {
        setOpen((isOpen) => !isOpen)
    }
    return (
        <>
            <div className="bg-slate-200 p-5 h-screen overflow-hidden">
                <div className="flex gap-4 h-full">
                    {isOpen &&
                        <Sidebar />
                    }
                    {/* Main Content */}
                    <div className={`${isOpen ? 'w-full' : 'w-screen'} bg-slate-300 p-4 rounded-lg`}>
                        <p className="cursor-pointer" onClick={()=>setOpen((isOpen) => !isOpen)}>X</p>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>)
}

export default MainContent