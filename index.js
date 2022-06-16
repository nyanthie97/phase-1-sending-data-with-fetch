// Add your code here
function submitData() {
    const formData = {
        "name":"Steve",
        "email":"steve@steve.com",
    };

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    let url = "http://localhost:3000/users";

    return fetch(url, fetchOptions)
    .then(response => response.json())
    .then(result => document.body.append(result.id))
    .catch((e) => document.body.append(e.message));
}