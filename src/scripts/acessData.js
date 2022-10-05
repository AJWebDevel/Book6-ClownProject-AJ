const applicationState = {
    clowns: [],
    completedJobs: [],
    partyRequests: []
}


const API = "https://localhost:8088"

//functions to fetch clowns, completedJobs, and partyRequests from API
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (availableClowns) => {
                applicationState.clowns = availableClowns
            }
        )
}
export const fetchCompletedJobs = () => {
    return fetch(`${API}/completedJobs`)
        .then(response => response.json())
        .then(
            (finishedJobs) => {
                applicationState.completedJobs = finishedJobs
            }
        )
}
export const fetchPartyRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then(
            (requests) => {
                applicationState.partyRequests = requests
            }
        )
}

//define main container
const mainContainer = document.querySelector("#container")

// function to send(post) partyRequests to json
export const sendPartyRequest = (userPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }

    return fetch(`${API}/partyRequests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//function to save(post) completedJobs to json
export const saveCompletedJobs = (job) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    }

    return fetch(`${API}/completedJobs`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

//getter functions for clowns, completedJobs, and partyRequests
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}
export const getCompletedJobs = () => {
    return applicationState.completedJobs.map(job => ({ ...job }))
}
export const getPartyRequests = () => {
    return applicationState.partyRequests.map(request => ({ ...request }))
}

//function to delete partyRequests
export const deletePartyRequest = (id) => {
    return fetch(`${API}/partyRequests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}