import { partyForm } from "./requestForm.js"
import { partyRequests } from "./requestsAndJobs.js"
import { completedJobs } from "./requestsAndJobs.js"

export const ClownBaseHTML = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    ${partyForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${partyRequests()}
    </section>

    <section class="completedJobs">
        <h2>Completed Jobs</h2>
        ${CompletedJobs()}
    </section>
    `
}
