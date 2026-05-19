// menuItem.js

export default {
  name: "menuItem",
  title: "Menü Item",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Name",
      type: "string"
    },

    {
      name: "description",
      title: "Beschreibung",
      type: "text"
    },

    {
      name: "price",
      title: "Preis",
      type: "number"
    },

    {
      name: "category",
      title: "Kategorie",
      type: "reference",
      to: [{ type: "menuCategory" }]
    },

    {
      name: "isAvailable",
      title: "Verfügbar",
      type: "boolean",
      initialValue: true
    }
  ]
}