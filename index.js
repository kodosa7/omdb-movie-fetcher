// API URL: https://www.omdbapi.com/
// need to be registered to get the API key

const apiKey = 'da9159e'

document.getElementById('get-btn').addEventListener('click', function() {
    const searchTitle = document.getElementById('movie-search').value

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTitle}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('show-data').innerHTML = 
        `
        <img src="${data.Poster}"></img>
        <p>Name: ${data.Title}</p>
        <p>Year: ${data.Year}</p>
        <p>Directed by: ${data.Director}</p>
        `
    })  
})