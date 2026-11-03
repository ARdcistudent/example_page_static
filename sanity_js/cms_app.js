import { projectId, dataset, apiVersion } from "./sanity";
import { toHTML } from "https://esm.sh/@portabletext/to-html";

// Sanity Date holen
async function loadHomepage() {
    const query = encodeURIComponent(`
        *[_type == "homepage"][0]{
        // Bezeichnungen aus Sanity einfügen / nutzen!!!
        }
        `);

        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

        const res = await fetch(url);
        const data = await res.json();

        const page = data.result;

        // in HTML einsetzen

}

// Beispiele! Nach erschaffung der Logik löschen!
// addressElement.innerHTML = data.address || `
//         <p class="address">
//           Die Kiste<br>
//           Musterstraße 12<br>
//           23552 Lübeck
//         </p>
// `;


// addressElement.innerHTML = data.address?.trim()
//   ? data.address
//   : `
//     <p class="address">
//       Die Kiste<br>
//       Musterstraße 12<br>
//       23552 Lübeck
//     </p>
//   `;
