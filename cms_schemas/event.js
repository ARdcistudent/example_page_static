// event.js

export default {
  name: "event",
  title: "Event",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: Rule => Rule.required()
    },

    {
      name: "date",
      title: "Datum",
      type: "datetime",
      validation: Rule => Rule.required()
    },

    {
      name: "description",
      title: "Beschreibung",
      type: "text"
    },

    {
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true }
    },

    {
      name: "artist",
      title: "Künstler / Act",
      type: "string"
    },

    {
      name: "isPublished",
      title: "Aktiv?",
      type: "boolean",
      initialValue: true
    }
  ]
}