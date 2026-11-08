
import { projectId, dataset, apiVersion } from "./sanity.js";


// ============================================
// ALLGEMEINE FUNKTION ZUM ABRUFEN VON SANITY-DATEN
// ============================================

export async function fetchSanityData(query) {

    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Sanity API Fehler: ${response.status}`);
        }

        const data = await response.json();

        return data.result;

    } catch (error) {

        console.error("Fehler beim Laden der Sanity-Daten:", error);

        return null;

    }

}


// ============================================
// HOMEPAGE-DATEN LADEN
// ============================================

export async function loadHomepageData() {

    const query = `
        *[_type == "homepage"][0] {
            heroHeadline,
            heroWelcome,
            openingHours,
            introHeadline,
            introText1,
            introImage1 {
                asset -> {
                    url
                }
            },
            introText2,
            introImage2 {
                asset -> {
                    url
                }
            },
            musicHeadline,
            musicText,
            closingText
        }
    `;

    return await fetchSanityData(query);

}


// ============================================
// KONTAKTSEITEN-DATEN LADEN
// ============================================

export async function loadContactData() {

    const query = `
        *[_type == "contact"][0] {
            contactItems[] {
                description,
                buttonText,
                link
            }
        }
    `;

    return await fetchSanityData(query);

}


// ============================================
// STELLENANGEBOTE LADEN
// ============================================

export async function loadJobsData() {

    const query = `
        *[_type == "jobs"][0] {
            jobs[] {
                title,
                jobType,
                workingTime
            }
        }
    `;

    return await fetchSanityData(query);

}

// ============================================
// EVENTS LADEN
// ============================================

export async function loadEventsData() {

    const query = `
        *[_type == "events"][0] {
            eventItems[] {
                title,
                date,
                startTime,
                endTime,
                subtitleLabel,
                subtitle,
                description,
                poster {
                    asset -> {
                        url
                    }
                },
                buttonText,
                buttonLink
            }
        }
    `;

    return await fetchSanityData(query);

}
