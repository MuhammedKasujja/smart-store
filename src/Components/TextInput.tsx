interface CustomInputProps{
  hint: string
  type?: 'email' | 'text' | 'number' | 'tel' | 'password'
  name?: string
  handleChange: (value: any) =>void
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) =>{
  const { hint, type, name, handleChange } = props
  return (<div>
    <input type={type} className="custom-input" placeholder={hint}  value={name} 
       onChange={(event)=>handleChange(event.target.value)}/>
  </div>);
}

export default CustomInput