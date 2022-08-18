export interface DashboadStatusCardProps {
    label: string,
    value: string,
}


const DashboadStatusCard: React.FC<DashboadStatusCardProps> = ({ label, value }) => {
    return (<>
        <div className="bg-gray-400 w-full h-40 rounded-xl align-center">
            <p>{label}</p>
            <p className="font-bold text-xl">{value}</p>
        </div>
    </>)
}

export default DashboadStatusCard