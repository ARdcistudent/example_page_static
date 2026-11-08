
export default {
  name: "contact",
  title: "Kontaktseite",
  type: "document",

  fields: [

    {
      name: "contactItems",
      title: "Kontaktmöglichkeiten",
      type: "array",

      of: [
        {
          type: "object",

          fields: [

            {
              name: "description",
              title: "Beschreibung",
              type: "text",
            },

            {
              name: "buttonText",
              title: "Button-Beschriftung",
              type: "string",
              validation: Rule => Rule.required(),
            },

            {
              name: "link",
              title: "Link / Funktion",
              type: "string",
              description: "z.B. mailto:info@travalala.de oder tel:+4945120944063",

              validation: Rule => Rule.required().custom(value => {
                if (!value) return true;

                const validLink = /^(https?:\/\/|mailto:|tel:|\.{1,2}\/|\/|#)[^\s]*$/i;

                return validLink.test(value)
                  ? true
                  : "Bitte einen gültigen Link, mailto- oder tel-Link eingeben.";
              }),
            },

          ],

          preview: {
            select: {
              title: "buttonText",
              subtitle: "link",
            },
          },

        },
      ],

    },

  ],
};
