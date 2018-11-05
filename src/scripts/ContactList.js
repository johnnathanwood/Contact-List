import contactCollection from "./ContactCollection";
import makeContact from "./Contact"


let articleEl = document.querySelector("#output")

function makeContactList(contactEntries) {
   contactEntries.forEach((contact) =>{
        let newContact = document.createElement("div");
        newContact.classList.add("contact")
        let contactInfo = makeContact(contact);
        newContact.innerHTML = contactInfo;
        articleEl.appendChild(newContact)
        })
    }

function nukeContacts(){
    articleEl.innerHTML = ""
}

const populatePage = () => {
    nukeContacts(),
    contactCollection.get().then(contacts => makeContactList(contacts))
}


export default populatePage

