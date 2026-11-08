
import { fetchSanityData } from "./cms_app.js";

async function loadMenuFiles() {

    const query = `
        *[_type == "menuFiles"][0] {
            foodMenu {
                asset -> {
                    url,
                    originalFilename
                }
            },
            drinksMenu {
                asset -> {
                    url,
                    originalFilename
                }
            }
        }
    `;

    const menu = await fetchSanityData(query);

    if (!menu) {
        console.error("Speisekarten konnten nicht geladen werden.");
        return;
    }

    // PDF-Adressen aus Sanity
    const foodUrl = menu.foodMenu?.asset?.url;
    const drinksUrl = menu.drinksMenu?.asset?.url;

    // Speisekarte
    if (foodUrl) {

        const foodCard = document.querySelectorAll(".menu_card")[0];

        if (foodCard) {

            const links = foodCard.querySelectorAll(".menu_buttons a");

            if (links[0]) {
                links[0].href = foodUrl;
            }

            if (links[1]) {
                links[1].href = foodUrl + "?dl=";
            }

        }

    }

    // Getränkekarte
    if (drinksUrl) {

        const drinksCard = document.querySelectorAll(".menu_card")[1];

        if (drinksCard) {

            const links = drinksCard.querySelectorAll(".menu_buttons a");

            if (links[0]) {
                links[0].href = drinksUrl;
            }

            if (links[1]) {
                links[1].href = drinksUrl + "?dl=";
            }

        }

    }

    console.log("Speise- und Getränkekarten erfolgreich geladen.");

}

document.addEventListener("DOMContentLoaded", loadMenuFiles);
