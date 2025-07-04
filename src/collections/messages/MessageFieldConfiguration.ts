import type { CollectionConfig } from 'payload';

export const MessageFieldConfiguration: CollectionConfig = {
  slug: 'messageFieldConfiguration',
  admin: {
    useAsTitle: 'computedTitle',
    group: 'Storage',
  },
  fields: [
    {
      label: "Custom Field",
      type: 'collapsible',
      fields: [
        {
          name: 'computedTitle',
          type: 'text',
          admin: {
            readOnly: true,
            hidden: true
          }
        },
        {
          name: 'fieldLabel',
          label: "Field Label",
          type: 'text',
          required: true,
          admin: {
            description: 'For show on frontend',
          },
        },
        {
          name: 'fieldName',
          label: "Field Name",
          type: 'text',
          required: true,
        },
        {
          name: 'fieldPlaceholder',
          label: "Field Placeholder",
          type: 'text',
          required: true,
          admin: {
            condition: (data) => data?.fieldType !== 'select',
          },
        },
        {
          name: 'fieldType',
          label: "Field Type",
          type: 'select',
          required: true,
          options: ['text', 'email', 'number', 'textarea', 'select'],
        },
        {
          name: 'selectOptions',
          type: 'array',
          label: 'Select Options',
          required: false,
          admin: {
            condition: (data) => data?.fieldType === 'select',
          },
          fields: [
            {
              name: 'optionLabel',
              type: 'text',
              required: true,
              label: 'Option Label (Uppercase is recommended)',
              admin: {
                description: 'For show on frontend',
              }
            },
            {
              name: 'optionValue',
              type: 'text',
              required: true,
              label: 'Option Value (Lowercase is recommended)'
            },
          ],
        },
      ]
    },
    {
      name: 'styling',
      type: 'checkbox',
      label: "Styling?",
      admin: {
        condition: (_, siblingData) => siblingData?.fieldType !== 'select' && siblingData?.fieldType !== 'textarea',
        description: 'By enabling styling, can make the current field into 2 input columns in one row',
      },
      defaultValue: false
    },
    {
      label: "Parallel Custom Field",
      type: 'collapsible',
      fields: [
        {
          name: 'parallelFieldLabel',
          label: "Parallel Field Label",
          type: 'text',
          validate: (val: any) => {
            if (!val) {
              return 'Parallel Field Label is required';
            }
            return true;
          },
          admin: {
            description: 'For show on frontend',
          },
        },
        {
          name: 'parallelFieldName',
          label: "Parallel Field Name",
          type: 'text',
          validate: (val: any) => {
            if (!val) {
              return 'Parallel Field Label is required';
            }
            return true;
          },
        },
        {
          name: 'parallelFieldPlaceholder',
          label: "Parallel Field Placeholder",
          type: 'text',
          validate: (val: any) => {
            if (!val) {
              return 'Parallel Field Label is required';
            }
            return true;
          },
        },
        {
          name: 'parallelFieldType',
          label: "Parallel Field Type",
          type: 'select',
          options: ['text', 'email', 'number'],
          validate: (val: any) => {
            if (!val) {
              return 'Parallel Field Label is required';
            }
            return true;
          },
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.styling === true && siblingData?.fieldType !== 'select' && siblingData?.fieldType !== 'textarea',
        description: 'Select the field to align with the current field (in one row there are 2 input columns on the frontend)',
      },
    },
    {
      name: 'required',
      type: 'checkbox',
      label: "Required?",
      admin: {
        description: 'By enabling required, can make the current field mandatory on the frontend.'
      },
      defaultValue: false
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        const isStyling = data?.styling === true;
        const hasParallel = data?.parallelFieldLabel;
        if (isStyling && hasParallel) {
          data.computedTitle = `${data.fieldLabel} & ${data.parallelFieldLabel}`;
        } else {
          if (data) {
            data.computedTitle = data.fieldLabel;
          }
        }
        if (data?.fieldType === 'select' || data?.fieldType === 'textarea') {
          data.styling = false;
          data.parallelFieldLabel = null;
          data.parallelFieldName = null;
          data.parallelFieldPlaceholder = null;
          data.parallelFieldType = null;
        }
        if (data?.fieldType === 'select') {
          data.fieldPlaceholder = null;
        }

        return data;
      }
    ],
  },
};
