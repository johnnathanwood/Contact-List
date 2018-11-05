

let contactCollection = {

    get () {
            return fetch("http://localhost:8088/contacts")
            .then(result => result.json())
    },

    add: (item) => {
            return fetch("http://localhost:8088/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
        }
    }




export default contactCollection


