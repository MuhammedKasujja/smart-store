import DashboadStatusCard from "./Components/StatusCard"

const DashboardPage: React.FC = () => {
    return (<>
        <div className="grid grid-cols-4 gap-4">
            <DashboadStatusCard label={"Orders"} value={"1000"} />
            <DashboadStatusCard label={"Patients"} value={"4500"} />
            <DashboadStatusCard label={"Drivers"} value={"56"} />
            <DashboadStatusCard label={"Users"} value={"10"} />
        </div>

    </>)
}

export default DashboardPage