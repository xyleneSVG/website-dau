// interfaces
import { FieldContactLists } from "../../_interfaces/pages";

export default function TextFieldTemplate({field}:{field: FieldContactLists}){
    return (
        <div className="flex flex-col gap-y-2 md:gap-y-4">
            <p>{field.fieldLabel}<span className="text-red-600">{field.required && ("*")}</span></p>
            <input type="text" name={field.fieldName} className="outline-none px-2 py-1 border border-[#999999] rounded-[5px] focus:border-[#00DB05] xl:rounded-[10px] xl:px-4 xl:py-3" placeholder={field.fieldPlaceholder}/>
        </div>
    )
}