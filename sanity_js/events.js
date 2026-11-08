
import { loadEventsData } from "./cms_app.js";

async function loadEvents() {

    const data = await loadEventsData();

    if (!data) {
        console.error("Keine Eventdaten in Sanity gefunden.");
        return;
    }

    const container = document.querySelector("#events_list");

    if (!container) {
        console.error("Event-Container nicht gefunden.");
        return;
    }

    container.innerHTML = "";

    // Heutiges Datum ohne Uhrzeit
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Nur zukünftige Events anzeigen und chronologisch sortieren
    const upcomingEvents = (data.eventItems || [])
        .filter(event => {
            if (!event.date) return false;

            const eventDate = new Date(
                event.date + "T00:00:00"
            );

            return eventDate >= today;
        })
        .sort((a, b) => a.date.localeCompare(b.date));

    // Eventkarten erzeugen
    upcomingEvents.forEach(event => {

        const article = document.createElement("article");
        article.className = "event_card";

        // EVENTPOSTER
        if (event.poster?.asset?.url) {

            const posterContainer = document.createElement("div");
            posterContainer.className = "event_poster";

            const posterLink = document.createElement("a");
            posterLink.href = event.poster.asset.url;
            posterLink.target = "_blank";
            posterLink.rel = "noopener noreferrer";

            const posterImage = document.createElement("img");
            posterImage.src = event.poster.asset.url;
            posterImage.alt = event.title || "Event Poster";

            posterLink.appendChild(posterImage);
            posterContainer.appendChild(posterLink);
            article.appendChild(posterContainer);

        }

        // EVENTINHALT
        const content = document.createElement("div");
        content.className = "event_content";

        // DATUM UND UHRZEIT
        const meta = document.createElement("div");
        meta.className = "event_meta";

        const dateSpan = document.createElement("span");

        const formattedDate = new Date(
            event.date + "T00:00:00"
        ).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        dateSpan.textContent = `📅 ${formattedDate}`;

        const timeSpan = document.createElement("span");

        let timeText = "";

        if (event.startTime) {
            timeText = event.startTime;

            if (event.endTime) {
                timeText += ` - ${event.endTime}`;
            }

            timeText += " Uhr";
        }

        timeSpan.textContent = timeText ? `🕒 ${timeText}` : "";

        meta.appendChild(dateSpan);

        if (timeText) {
            meta.appendChild(timeSpan);
        }

        content.appendChild(meta);

        // EVENTTITEL
        const headline = document.createElement("h3");
        headline.textContent = event.title || "";

        content.appendChild(headline);

        // UNTERTITEL
        if (event.subtitle) {

            const subtitle = document.createElement("h4");

            if (event.subtitleLabel) {

                const label = document.createElement("span");
                label.textContent = event.subtitleLabel + " ";

                subtitle.appendChild(label);

            }

            subtitle.appendChild(
                document.createTextNode(event.subtitle)
            );

            content.appendChild(subtitle);

        }

        // BESCHREIBUNG
        if (event.description) {

            const description = document.createElement("p");
            description.className = "event_artist";
            description.textContent = event.description;

            content.appendChild(description);

        }

        // BUTTON
        if (event.buttonText && event.buttonLink) {

            const button = document.createElement("a");

            button.href = event.buttonLink;
            button.className = "event_btn";
            button.textContent = event.buttonText;

            content.appendChild(button);

        }

        article.appendChild(content);
        container.appendChild(article);

    });

    console.log("Events erfolgreich geladen.");

}

document.addEventListener("DOMContentLoaded", loadEvents);
