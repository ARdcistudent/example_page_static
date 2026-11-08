
export default {
  name: "menuFiles",
  title: "Speise- & Getränkekarten",
  type: "document",

  fields: [

    {
      name: "foodMenu",
      title: "Speisekarte (PDF)",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "drinksMenu",
      title: "Getränkekarte (PDF)",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: Rule => Rule.required(),
    },

  ],
};
