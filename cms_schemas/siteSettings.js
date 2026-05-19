// siteSettings.js

export default {
  name: "siteSettings",
  title: "Website Einstellungen",
  type: "document",

  fields: [
    {
      name: "restaurantName",
      title: "Name",
      type: "string"
    },

    {
      name: "heroText",
      title: "Hero Text",
      type: "string"
    },

    {
      name: "reservationLink",
      title: "Reservierungs Link",
      type: "url"
    },

    {
      name: "openingHours",
      title: "Öffnungszeiten",
      type: "text"
    }
  ]
}