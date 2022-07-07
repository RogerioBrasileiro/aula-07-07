
const response = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })

    .then(data => {
        console.log(data[0])
        data.map(user => {
            console.log(`Nome: ${user.name}`)
        })
    })



    .catch(error => {
        console.log(`Deu erro na busca: ${error}`)
    })


