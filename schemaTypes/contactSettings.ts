import { Rule } from '@sanity/types'

export default {
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'address',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'phone',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'email',
      type: 'string',
      validation: (rule: Rule) => rule.required().email()
    },
    {
      name: 'googleMapsUrl',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    }
  ]
} 