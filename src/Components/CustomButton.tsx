import { MouseEventHandler } from "react"

interface CustomButtonProps{
    label: string
    loading?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const CustomButton: React.FC<CustomButtonProps> = (props: CustomButtonProps)=>{
   const { label, loading, onClick } = props
   return(<button className="btn" onClick={onClick}>{label} {loading && '...'} </button>);
}

export default CustomButton