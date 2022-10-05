

//function to return html form for customer to input request details
export const partyForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="guestCount">Number of Attendees</label>
    <input type="number" name="guestCount" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyAddress">Party Address</label>
    <input type="text" name="partyAddress" class="input" />
    </div>
    <div class="field">
    <label class="label" for="partyDate">Party Date</label>
    <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
    <label class="label" for="timeLength">How Many Hours?</label>
    <input type="number" name="timeLength" class="input" />
    </div>
    
    <button class="submitButton" id="submitRequest">Submit Request</button>
    `

    return html
}



