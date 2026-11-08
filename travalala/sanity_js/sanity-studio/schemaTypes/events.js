
export default {
  name: "events",
  title: "Eventverwaltung",
  type: "document",

  fields: [

    {
      name: "eventItems",
      title: "Veranstaltungen",
      type: "array",

      of: [
        {
          type: "object",

          fields: [

            {
              name: "title",
              title: "Eventtitel",
              type: "string",
              validation: Rule => Rule.required(),
            },

            {
              name: "date",
              title: "Veranstaltungsdatum",
              type: "date",
              validation: Rule => Rule.required(),
            },

            {
              name: "startTime",
              title: "Beginn",
              type: "string",
              description: "Beispiel: 19:30 Uhr",
            },

            {
              name: "endTime",
              title: "Ende",
              type: "string",
              description: "Beispiel: 22:00 Uhr",
            },

            {
              name: "subtitleLabel",
              title: "Untertitel-Kennzeichnung",
              type: "string",
              description: "Beispiel: Live On Stage:",
            },

            {
              name: "subtitle",
              title: "Untertitel / Künstler",
              type: "string",
            },

            {
              name: "description",
              title: "Eventbeschreibung",
              type: "text",
            },

            {
              name: "poster",
              title: "Eventplakat",
              type: "image",
              options: {
                hotspot: true,
              },
            },

            {
              name: "buttonText",
              title: "Button-Beschriftung",
              type: "string",
              description: "Leer lassen, wenn kein Button erscheinen soll.",
            },

            {
              name: "buttonLink",
              title: "Button-Link",
              type: "string",
              description: "Beispiel: ./reservations.html oder eine externe URL.",
            },

          ],

          preview: {
            select: {
              title: "title",
              subtitle: "date",
              media: "poster",
            },
          },

        },
      ],

    },

  ],
};
