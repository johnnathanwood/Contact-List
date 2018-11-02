const remoteURL = "http://localhost:8088"

let contactCollection = {

    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
            .then(result => result.json())
        }
    },

    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
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

