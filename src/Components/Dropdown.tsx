import { useState } from "react"

interface DropdownItems {
    id: string | number,
    name: string
}

interface CustomDropdownProps {
    items: Array<DropdownItems>,
    value?: string,
    onChange: (value: string) => void,
}

const CustomDropdown: React.FC<CustomDropdownProps> = (props: CustomDropdownProps) => {
    const { items, value, onChange } = props
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(value!);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id: string) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown()
        onChange(id)
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id == selectedItem)?.name : "Select your destination"}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div className="dropdown-item" onClick={e => handleItemClick(e.currentTarget.id)} id={`${item.id}`} key={item.id}>
                        <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    //     const DropdownOptions = items.map((item) =>
    //     <option value={item.id} key={item.id}>{item.name}</option>
    // )

        // <div>
        //     <select className="dropdown" name="data" value={value} onChange={(event)=>{
        //         Logger.message({ key: 'Selected', data: event.target.value })
        //     }}>
        //         {DropdownOptions}
        //     </select>
        // </div>
    )
}

export default CustomDropdown