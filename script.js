
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


const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userId: 5,
            title: 'Titulo Teste',
            body: 'Eu fui inserido'

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

addPost();
