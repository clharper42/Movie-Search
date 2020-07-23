let movieNameElement = document.getElementById('moviename');
let movieYearElement = document.getElementById('movieyear');
let movieForm = document.getElementById('formmovie');

let moviePoster = document.getElementById('movieposter');
let movieTitle = document.getElementById('title');
let movieYear = document.getElementById('year');
let movieDirector = document.getElementById('director');
let movieTopBilled = document.getElementById('topbilled');
let movieMetaScore = document.getElementById('metascore');
let movieIMDBRating = document.getElementById('imdbrating');

let api_url = "";
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    if(data.Response == "True")
    {
        movieTitle.innerText = "";
        movieTitle.innerText = data.Title;

        movieYear.innerText = "";
        movieYear.innerText = data.Year;

        movieDirector.innerText = "";
        movieDirector.innerText = data.Director;

        movieTopBilled.innerText = "";
        movieTopBilled.innerText = data.Actors.split(", ")[0];

        movieMetaScore.innerText = "";
        movieMetaScore.innerText = data.Metascore;

        movieIMDBRating.innerText = "";
        movieIMDBRating.innerText = data.imdbRating;

        moviePoster.src = "";
        moviePoster.src = data.Poster;

    }
};

movieForm.addEventListener('submit', function(){
    event.preventDefault();
    if(!movieNameElement.value)
    {
        return
    }
    else if(!movieYearElement.value || !(/^\d+$/.test(movieYearElement.value)))
    {
        api_url = "http://www.omdbapi.com/?apikey=KEY&t=" + movieNameElement.value;
    }
    else
    {
        api_url = "http://www.omdbapi.com/?apikey=KEY&t=" + movieNameElement.value + "&y=" + movieYearElement.value;
    }

    getData();;
})
