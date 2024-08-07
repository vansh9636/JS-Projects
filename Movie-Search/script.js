
//  Movie search App  const 
function SeachMovie() {
    let findmovie = document.getElementById('findmovie');
    let findbtn = document.getElementById('searchbtn');
    findbtn.addEventListener("click", () => {
        if (findmovie.value.length == 0) {
            alert("Enter Movie name");
        }
        else {
            let movieName = findmovie.value;
            let Key = "35b915a8"

            const fetchMovie = async () => {
                try {
                    let data = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${Key}`)
                    let newdata = await data.json();
                    console.log(newdata.Genre.split(","));
                    console.log(newdata);
                    document.getElementById("poster").setAttribute("src", `${newdata.Poster}`);
                    document.getElementById("title").innerText = `${newdata.Title}`;
                    document.getElementById("Rating").innerText = `${newdata.imdbRating}`;
                    document.getElementById("rated").innerText = `${newdata.Rated}`;
                    document.getElementById("year").innerText = `${newdata.Year}`;
                    document.getElementById("runtime").innerText = `${newdata.Runtime}`;
                    document.getElementById("genre").innerText = `${newdata.Genre.split(",")[0]}`;
                    document.getElementById("genre2").innerText = `${newdata.Genre.split(",")[1]}`;
                    document.getElementById("language").innerText = `${newdata.Language.split(",")[0]}`;
                    document.getElementById("plot").innerText = `${newdata.Plot}`;
                    document.getElementById("cast").innerText = `${newdata.Actors}`;


                } catch (error) {
                    alert("● Movie not found \n● Api Error");
                }
            };
            fetchMovie();

            setTimeout(() => {
                document.getElementById("blockcard").style.display = "block";
            }, 200);
        }

    })

}
SeachMovie();