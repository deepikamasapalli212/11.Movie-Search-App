const searchInput = document.getElementById("searchInput");
const movieGrid = document.getElementById("movieGrid");
const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const movies = [
{
title:"The Dark Knight",
year:"2008",
genre:"Action",
rating:"9.0",
plot:"Batman faces the Joker.",
poster:"/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
{
title:"Avengers: Endgame",
year:"2019",
genre:"Action",
rating:"8.4",
plot:"The Avengers assemble to defeat Thanos.",
poster:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
},
{
title:"Joker",
year:"2019",
genre:"Drama",
rating:"8.4",
plot:"A troubled comedian becomes Joker.",
poster:"/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},
{
title:"Titanic",
year:"1997",
genre:"Romance",
rating:"7.9",
plot:"A love story aboard the Titanic.",
poster:"/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
},
{
title:"The Matrix",
year:"1999",
genre:"Sci-Fi",
rating:"8.7",
plot:"Reality is a simulation.",
poster:"/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
},
{
title:"Spider-Man",
year:"2002",
genre:"Action",
rating:"7.3",
plot:"A teenager gains spider powers.",
poster:"/rweIrveL43TaxUN0akQEaAXL6x0.jpg"
}
];

function displayMovies(list){
movieGrid.innerHTML="";

list.forEach(movie=>{
const card=document.createElement("div");
card.className="movie-card";

card.innerHTML=`
<img src="${IMG_PATH + movie.poster}">
<h4>${movie.title}</h4>
`;

card.onclick=()=>showDetails(movie);
movieGrid.appendChild(card);
});
}

searchInput.addEventListener("input",()=>{
const value=searchInput.value.toLowerCase();
const filtered=movies.filter(m=>m.title.toLowerCase().includes(value));
displayMovies(filtered);
});

function showDetails(movie){
modal.style.display="flex";
modalBox.innerHTML=`
<span class="close" onclick="closeModal()">X</span>
<h2>${movie.title}</h2>
<p><strong>Year:</strong> ${movie.year}</p>
<p><strong>Genre:</strong> ${movie.genre}</p>
<p><strong>Rating:</strong> ${movie.rating}</p>
<p><strong>Plot:</strong> ${movie.plot}</p>
`;
}

function closeModal(){
modal.style.display="none";
}

displayMovies(movies);
