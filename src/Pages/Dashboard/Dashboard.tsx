
import { useFetchData } from "../../Api/useFetchData"
import DashboadStatusCard from "./Components/StatusCard"

const DashboardPage: React.FC = () => {
    const { loading, data, error } = useFetchData('http://127.0.0.1:8000/api/admin', 'GET')
    return (<>
        <div className="grid grid-cols-4 gap-4">
            <DashboadStatusCard label={"Orders"} value={"1000"} />
            <DashboadStatusCard label={"Patients"} value={"4500"} />
            <DashboadStatusCard label={"Drivers"} value={"56"} />
            <DashboadStatusCard label={"Users"} value={"10"} />
        </div>
        {error && <p>{error}</p>}

    </>)
}

export default DashboardPage