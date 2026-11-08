
export default {
  name: "jobs",
  title: "Stellenangebote",
  type: "document",

  fields: [

    {
      name: "jobs",
      title: "Stellenangebote",
      type: "array",

      of: [
        {
          type: "object",

          fields: [

            {
              name: "title",
              title: "Berufsbezeichnung",
              type: "string",
              validation: Rule => Rule.required(),
            },

            {
              name: "jobType",
              title: "Geschlechtseintrag",
              type: "string",
              initialValue: "m/w/d",
            },

            {
              name: "workingTime",
              title: "Arbeitszeit",
              type: "string",
              validation: Rule => Rule.required(),
            },

          ],

          preview: {
            select: {
              title: "title",
              subtitle: "workingTime",
            },
          },

        },
      ],

    },

  ],
};
