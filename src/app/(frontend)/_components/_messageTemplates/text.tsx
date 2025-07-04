export default function TextFieldTemplate(){
    return (
        <div className="flex flex-col text-[13px] font-light gap-y-1">
            <p>Nama Anda*</p>
            <input type="text" className="px-2 py-1 border border-[#999999] rounded-[5px]" placeholder="John Doe"/>
        </div>
    )
}