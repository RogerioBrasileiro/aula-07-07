const response = fetch('https://jsonplaceholder.typicode.com/posts/20')
    .then(res => {

        console.log(res.jason())
    })

    .catch(error => {
        console.log(`Deu erro na busca: ${error}`)
    })


