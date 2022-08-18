import SidebarRoutes from "./SidebarRoutes"

const Sidebar: React.FC = () => {
    return (
        <>
            <div className="w-60 bg-slate-50 p-4 rounded-lg relative">
                {SidebarRoutes()}
                <div className="bg-slate-300 p-2 text-inherit rounded-md mt-3 font-bold absolute bottom-4 right-4 left-4 cursor-pointer">
                    Logout
                </div>
            </div>
        </>)
}

export default Sidebar