import { Rule } from '@sanity/types'

export default {
  name: 'socialMediaSettings',
  title: 'Social Media Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    }
  ]
} 