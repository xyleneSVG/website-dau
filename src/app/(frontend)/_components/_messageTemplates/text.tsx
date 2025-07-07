// interfaces
import { FieldContactLists } from "../../_interfaces/pages";

export default function TextFieldTemplate({field}:{field: FieldContactLists}){
    return (
        <div className="flex flex-col text-[13px] font-light gap-y-2">
            <p>{field.fieldLabel}<span className="text-red-600">{field.required && ("*")}</span></p>
            <input type="text" name={field.fieldName} className="px-2 py-1 border border-[#999999] rounded-[5px]" placeholder={field.fieldPlaceholder}/>
        </div>
    )
}