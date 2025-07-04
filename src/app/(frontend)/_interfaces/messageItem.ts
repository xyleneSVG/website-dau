export interface MessageItem {
  id: number,
  fieldLabel: string,
  fieldName: string,
  fieldType: string,
  selectOptions: SelectOption,
  parallelFieldLabel: string,
  parallelFieldName: string,
  parallelFieldType: string
  required: boolean,
}

export interface SelectOption {
  id: string,
  optionLabel: string,
  optionValue: string,
}