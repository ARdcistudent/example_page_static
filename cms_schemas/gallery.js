// gallery.js

export default {
  name: "gallery",
  title: "Galerie",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string"
    },

    {
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true }
        }
      ]
    }
  ]
}