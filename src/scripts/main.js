import { ClownBaseHTML } from "./ClownTown.js"
import { fetchClowns, fetchCompletedJobs, fetchPartyRequests } from "./acessData.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPartyRequests()
        .then(() => fetchClowns())
        .then(() => fetchCompletedJobs())
        .then(
            () => {
                mainContainer.innerHTML = ClownBaseHTML()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

