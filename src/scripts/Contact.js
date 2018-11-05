const makeContact = (contacts)  => {
    return `
    <di class="contact-form">
        <h1>Name:</h1>
        <p class="entry"><h3>${contacts.name}</h3></p>
        <h2>Phone Number:</h2>
        <p class="entry"><h3>${contacts.number}</h3></p>
        <h2>Address:</h2>
        <p class="entry"><h3>${contacts.address}</h3></p>
        </div>
        `
}

export default makeContact
