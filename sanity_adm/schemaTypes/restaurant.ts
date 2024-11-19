import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image of the Resturant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Resturant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant ',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Resturant address',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter from (1-5 Start)',
      type: 'number',
      validation: (Rule) => Rule.required()
        .min(1).max(5).error("Please enter a Value Between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'dish'}] }],
    }),
  ],

})
