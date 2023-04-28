interface CardProps{
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) =>{
    return (<div className="bg-white rounded-md p-5 mb-4 drop-shadow-xl">
        {children}
    </div>)
}

export default Card