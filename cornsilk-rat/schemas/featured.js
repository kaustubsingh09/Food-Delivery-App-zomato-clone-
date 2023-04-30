export default {
    name: 'featured',
    title: 'Featured Menu categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured categorie name',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short Description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{ type: "reference", to: [{ type: "restaurant" }] }]
      },

      {
        name: 'image',
        type: 'image',
        title: 'Image of Dish',
      },
    ],
  }
  