import { Children } from "react"

interface CardProps{
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) =>{
    return (<div className="bg-white rounded-md p-4 mb-4 drop-shadow-md hover:drop-shadow-xl">
        {children}
    </div>)
}

export default Card