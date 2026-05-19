export const EVENTS_QUERY = `
*[_type == "event" && isPublished == true && date > now()]
| order(date asc){
  title,
  date,
  image,
  artist,
  description
}
`;

export const MENU_QUERY = `
*[_type == "menuItem"]{
  title,
  description,
  price,
  category->title
}
`;

export const GALLERY_QUERY = `
*[_type == "gallery"][0]{
  images
}
`;