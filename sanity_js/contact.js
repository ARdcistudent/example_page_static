
import { loadContactData } from "./cms_app.js";

async function loadContact() {

    const contact = await loadContactData();

    if (!contact) {
        console.error("Keine Kontaktdaten in Sanity gefunden.");
        return;
    }

    const container = document.querySelector("#contact_items");

    if (!container) return;

    // Alte Kontaktmöglichkeiten entfernen
    container.querySelectorAll(".contact_highlight")
        .forEach(element => element.remove());

    // Neue Kontaktmöglichkeiten erstellen
    contact.contactItems?.forEach(item => {

        const highlight = document.createElement("div");
        highlight.className = "contact_highlight";

        const description = document.createElement("p");
        description.textContent = item.description || "";

        const button = document.createElement("a");
        button.href = item.link || "#";
        button.className = "contact_phone contact_badge";
        button.textContent = item.buttonText || "";

        highlight.appendChild(description);
        highlight.appendChild(button);

        container.appendChild(highlight);

    });

}

document.addEventListener("DOMContentLoaded", loadContact);
