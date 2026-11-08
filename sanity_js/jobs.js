
import { loadJobsData } from "./cms_app.js";

async function loadJobs() {

    const data = await loadJobsData();

    if (!data) {
        console.error("Keine Stellenangebote in Sanity gefunden.");
        return;
    }

    const container = document.querySelector("#jobs_list");

    if (!container) {
        console.error("Jobs-Container nicht gefunden.");
        return;
    }

    // Vorhandene Einträge entfernen
    container.innerHTML = "";

    // Stellenangebote aus Sanity anzeigen
    data.jobs?.forEach(job => {

        const article = document.createElement("article");
        article.className = "job_card";

        const headline = document.createElement("h3");
        headline.textContent = job.title || "";

        const type = document.createElement("p");
        type.className = "job_type";
        type.textContent = job.jobType || "";

        const workingTime = document.createElement("p");
        workingTime.className = "job_time";
        workingTime.textContent = job.workingTime || "";

        article.appendChild(headline);
        article.appendChild(type);
        article.appendChild(workingTime);

        container.appendChild(article);

    });

}

document.addEventListener("DOMContentLoaded", loadJobs);
