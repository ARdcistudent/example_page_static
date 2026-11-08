
import { loadHomepageData } from "./cms_app.js";

async function loadHomepage() {

    const page = await loadHomepageData();

    if (!page) {
        console.error("Keine Homepage-Daten in Sanity gefunden.");
        return;
    }

    // HERO-BEREICH
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.querySelector("h1").textContent =
            page.heroHeadline || "";

        const paragraphs = hero.querySelectorAll("p");

        if (paragraphs[0]) {
            paragraphs[0].textContent = page.heroWelcome || "";
        }

        if (paragraphs[1]) {
            paragraphs[1].textContent = page.openingHours || "";
        }
    }

    // INTRODUCTION
    const introduction = document.querySelector(".introduction");

    if (introduction) {

        const headline = introduction.querySelector("h2");

        if (headline) {
            headline.textContent = page.introHeadline || "";
        }

        const texts = introduction.querySelectorAll("p.text");
        const images = introduction.querySelectorAll("img");

        if (texts[0]) {
            texts[0].textContent = page.introText1 || "";
        }

        if (texts[1]) {
            texts[1].textContent = page.introText2 || "";
        }

        if (texts[2]) {
            texts[2].textContent = page.musicText || "";
        }

        if (texts[3]) {
            texts[3].textContent = page.closingText || "";
        }

        if (images[0] && page.introImage1?.asset?.url) {
            images[0].src = page.introImage1.asset.url;
        }

        if (images[1] && page.introImage2?.asset?.url) {
            images[1].src = page.introImage2.asset.url;
        }

        const musicHeadline = introduction.querySelector("h3");

        if (musicHeadline) {
            musicHeadline.textContent = page.musicHeadline || "";
        }

    }

}


// Homepage laden, sobald das HTML bereit ist
document.addEventListener("DOMContentLoaded", loadHomepage);
