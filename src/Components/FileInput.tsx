

interface FileInputProps {
    label: string,
    hint?: string,
    onChange: (file: File) => void
}

const FileInput: React.FC<FileInputProps> = ({ onChange, hint, label }) => {
    return (<>
        <input type={"file"} className="custom-input" placeholder={hint}
            onChange={(event) => {
                if (event.target.files) {
                    onChange(event.target.files[0])
                }
            }} />
    </>)
}

export default FileInput