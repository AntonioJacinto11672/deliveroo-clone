import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of Category"
    })
  ],
})
