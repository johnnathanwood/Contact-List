const makeContact = (entry)  => {
    return `
    <div class="contact-form>
        <h1>Name:</h1>
        <p class="entry">${entry.name}</p>
        <h2>Phone Number:</h2>
        <p class="entry">${entry.number}</p>
        <h2>Address:</h2>
        <p class="entry">${entry.address}</p></div>`
}
