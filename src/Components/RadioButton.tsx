

interface RadioButtonProps {
    checked: boolean,
    label: string,
    onChange: (val: string) => void
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, label, onChange }) => {
    return (<>
    <label>
        <input type="radio" checked={checked} className={'default:ring-2'} onChange={() => {
            onChange(label)
        }} />
        {label}
        </label>
    </>)
}

export default RadioButton