fetch("person.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (personProcessing) {
        let placeholder = document.querySelector("#info");
        let out = "";

        for (let product of personProcessing) {
            out += `
        <tr>
            <td>${product.firstName}</td>
            <td>${product.lastName}</td>
            <td>${product.age}</td>
            <td>${product.town}</td>
        </tr>
        `;
        }

        placeholder.innerHTML = out;
    })