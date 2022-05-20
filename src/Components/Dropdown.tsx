interface DropdownItems{
    id: number
    name: string
}

interface CustomDropdownProps{
    items:Array<DropdownItems>
}

const CustomDropdown: React.FC<CustomDropdownProps>  = (props: CustomDropdownProps) =>{
    const { items } = props
    
    const DropdownOptions = items.map((item)=>
            <option value={item.id} key={item.id}>{item.name}</option>
          )

  return (<div>
  <select className="dropdown" name="data">
      {DropdownOptions}
  </select>
  </div>)
}

export default CustomDropdown