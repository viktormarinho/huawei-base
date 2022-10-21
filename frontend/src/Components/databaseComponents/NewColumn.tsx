import { ChangeEventHandler } from "react"
import { Input } from "../form/Input"

type FieldComponentProps = {
    onChanges: {
        name: Function
        type: Function
    }
    values: {
        name: string
        type: string
    }
}

export const FieldComponent = ({ onChanges, values }: FieldComponentProps) => {
    return (
        <div className="flex flex-row gap-2 ">
            <Input placeholder="field name" type="text" value={values.name} onChange={onChanges.name} />
            <select placeholder="field type" value={values.type} onChange={onChanges.type as ChangeEventHandler<HTMLSelectElement>}
                className="bg-[#F2F2F2] cursor-pointer focus:outline-none rounded-lg" >
                <option>TEXT</option>
                <option>INTEGER</option>
            </select>
        </div>
    )
}