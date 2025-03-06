import { Rule } from '@sanity/types'

export default {
  name: 'donationSettings',
  title: 'Donation Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'isUpiEnabled',
      type: 'boolean',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'upiId',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'qrCodeImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ],
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'isBankEnabled',
      type: 'boolean',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'accountName',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'accountNumber',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'ifscCode',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'bankAndBranch',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    }
  ]
} 