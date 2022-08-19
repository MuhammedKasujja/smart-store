interface CustomInputProps {
  hint: string
  type?: 'email' | 'text' | 'number' | 'tel' | 'password'
  value?: string
  handleChange: (value: any) => void
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  const { hint, type, value, handleChange } = props
  return (<div>
    <input type={type ?? 'text'} className="custom-input required:border-red-500" placeholder={hint} value={value}
      onChange={(event) => handleChange(event.target.value)} />
  </div>);
}

export default CustomInput