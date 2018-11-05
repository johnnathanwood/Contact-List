import populatePage from "./contactList"
import contactForm from "./ContactForm"


populatePage()

const save = document.querySelector("#save")
save.addEventListener("click",() => {
    contactForm()
    populatePage()
    location.reload()
})