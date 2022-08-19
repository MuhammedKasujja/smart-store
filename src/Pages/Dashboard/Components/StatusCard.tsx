export interface DashboadStatusCardProps {
    label: string,
    value: string,
}


const DashboadStatusCard: React.FC<DashboadStatusCardProps> = ({ label, value }) => {
    return (<>
        <div className="bg-gray-100 w-full h-40 rounded-xl align-center border-l-4 border-indigo-600">
            <p>{label}</p>
            <p className="font-bold text-xl">{value}</p>
        </div>
    </>)
}

export default DashboadStatusCard