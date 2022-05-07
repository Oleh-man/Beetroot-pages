const movies = document.getElementById('moviesContainer');
const input = document.getElementById('input');
let showMovies = document.getElementById('show-movies');
let src = 'http://www.omdbapi.com/?apikey=721371';

showMovies.addEventListener('click', () => {
    let movieItem = input.value;

    fetch(`${src}&s=${movieItem}`).then((result) => {
        return result.json()
    })
    .then(data => {
        console.log(data);
        createItem(data)
    })

});

function createItem(data){
    movies.innerHTML = ""
    if (data.Response == 'False') {
        let error1 = document.createElement('div')
        error1.innerText = `${data.Error}`
        movies.append(error1)
    }else {
        data.Search.forEach(element => {
            let detailsBtn = document.createElement('button')
            detailsBtn.innerText = 'Show Details'
            let movieTitle = document.createElement('div')
            movieTitle.innerHTML = `
                <img height="200" src="${element.Poster}"></img>
                <div>
                <div>Name: ${element.Title}</div>
                <div>Year: ${element.Year}</div>
                </div>
            `;
            
            movieTitle.style.width = '500px'
            
            movies.append(movieTitle);
            movieTitle.append(detailsBtn);
            movies.style.textAlign = "center"
            movieTitle.style.margin = "auto"
            movieTitle.style.marginBottom = "50px"
            movieTitle.style.border = "2px solid black"
            
            //
            detailsBtn.addEventListener('click', function showDetails() {
                let movieID = element.imdbID
                console.log(movieID);
                fetch(`${src}&i=${movieID}`).then((result) => {
                    return result.json()
                })
                .then(data => {
                    console.log('details data',data.Actors);
                    let detailsData = document.createElement('div');
                    detailsData.innerHTML = `
                        <div>Actors: ${data.Actors}</div>
                        <div>Genre: ${data.Genre}</div>
                        <div>Plot: ${data.Plot}</div>
                    `;

                    movieTitle.append(detailsData);
                })
                detailsBtn.removeEventListener('click', showDetails)
            });

        });
    };
};


