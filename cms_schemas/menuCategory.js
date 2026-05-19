// menuCategory.js

export default {
  name: "menuCategory",
  title: "Menü Kategorie",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string"
    },

    {
      name: "order",
      title: "Reihenfolge",
      type: "number"
    }
  ]
}