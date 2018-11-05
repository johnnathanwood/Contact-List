import contactCollection from "./contactCollection"

const contactForm = function submitForm() {
    const name_box = document.querySelector("#name_box")
    const number_box = document.querySelector("#number_box")
    const address_box = document.querySelector("#address_box")
    let eachContact = {
        name: "",
        number: "",
        address: "",
    }

    eachContact.name = (name_box.value)
    eachContact.number = (number_box.value)
    eachContact.address = (address_box.value)

    contactCollection.add(eachContact)
}

export default contactForm