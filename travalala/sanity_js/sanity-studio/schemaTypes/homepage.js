
export default {
  name: "homepage",
  title: "Startseite",
  type: "document",

  // Nur ein Homepage-Dokument erlauben
  fields: [

    // HERO-BEREICH
    {
      name: "heroHeadline",
      title: "Hauptüberschrift",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "heroWelcome",
      title: "Begrüßungstext",
      type: "string",
    },
    {
      name: "openingHours",
      title: "Öffnungszeiten",
      type: "string",
    },

    // WILLKOMMENSBEREICH
    {
      name: "introHeadline",
      title: "Überschrift",
      type: "string",
    },
    {
      name: "introText1",
      title: "Erster Textabschnitt",
      type: "text",
    },
    {
      name: "introImage1",
      title: "Erstes Bild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "introText2",
      title: "Zweiter Textabschnitt",
      type: "text",
    },
    {
      name: "introImage2",
      title: "Zweites Bild",
      type: "image",
      options: { hotspot: true },
    },

    // MUSIKBEREICH
    {
      name: "musicHeadline",
      title: "Zwischenüberschrift",
      type: "string",
    },
    {
      name: "musicText",
      title: "Dritter Textabschnitt",
      type: "text",
    },
    {
      name: "closingText",
      title: "Abschließender Textabschnitt",
      type: "text",
    },

  ],
};
