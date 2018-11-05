
import sayGoodbye from "./goodbye"
import SandwichMaker from "./sandwichMaker"
import getContactEntries from "./ContactList"
import contactCollection from "./ContactCollection"

sayGoodbye()

SandwichMaker.placeOrder("rye", "capicola", "provolone")

console.log(contactCollection.get.entries)