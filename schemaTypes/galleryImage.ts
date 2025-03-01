import { Rule } from '@sanity/types'

export default {
  name: 'galleryImage',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'category',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      options: {
        list: [
          { title: 'Blood Donation', value: 'blood-donation' },
          { title: 'Eye Care', value: 'eye-care' },
          { title: 'Cancer Awareness', value: 'cancer-awareness' },
          { title: 'Thalassemia Support', value: 'thalassemia-support' },
          { title: 'Other', value: 'other' }
        ]
      }
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'image',
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
    }
  ]
} 