

let contactCollection = {

    get: {
        value: (id) => {
            return fetch("http://localhost:8088/contacts")
            .then(result => result.json())
        }
    },

    add: {
        value: (item) => {
            return fetch("http://localhost:8088/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    }
}


export default contactCollection


