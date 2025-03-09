import { Rule } from '@sanity/types'

export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'date',
      type: 'datetime',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'location',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'expectedParticipants',
      type: 'string'
    },
    {
      name: 'isUpcoming',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'shortDesc',
      type: 'string'
    },
    {
      name: 'desc',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Card Image',
      description: 'This image will be used as the main card/thumbnail image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'gallery',
      title: 'Event Gallery',
      description: 'Add multiple images for the event gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image'
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    }
  ]
} 