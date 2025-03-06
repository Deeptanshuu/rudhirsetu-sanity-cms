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
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
} 