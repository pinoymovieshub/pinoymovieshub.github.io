'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


const myApi = "6b2dec73b6697866a50cdaef60ccffcb";

const NowPlayingMoviesDiv = document.querySelector(".movies-list");

const NowPlaying = async () => {
  const res = await fetch(
   // "https://api.themoviedb.org/3/movie/now_playing?api_key=680c99274ddab12ffac27271d9445d45&language=en&page=2"
   "https://api.themoviedb.org/3/movie/popular?with_original_language=tl&api_key=680c99274ddab12ffac27271d9445d45"
  );
  const data = await res.json();
  const NowPlayingmovies = data.results;
  return NowPlayingmovies;
}

const NowPlayingfun = (movie) => {
  let url = "./movie-details.html?id=" + encodeURIComponent(movie.id);
  return `<li>
              <div class="movie-card">

                <a href=${url}>
                  <figure class="card-banner">
                    <img data-id="${movie.id}" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">${movie.title}</h3>
                  </a>

                  <time datetime="2022">${dateFormatter(
               movie.release_date
             )}</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT122M">122 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>${
               movie.vote_average
             }</data>
                  </div>
                </div>

              </div>
            </li>`;
}

const NowPlayingfuni = (movie) => {
  let url = "./movieDetail.html?id=" + encodeURIComponent(movie.id);
  return `<div class="Now_playing_movies" >
    <a class="posterlink" href=${url}> <img class="poster" data-id="${movie.id}" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
        onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
        loading="lazy" alt="${movie.title}"></a>
         <p class="movie_title">${movie.title}</p>
         <div class="date_rating">
             <p class="date">${dateFormatter(
               movie.release_date
             )}</p><span class="dot dot2"></span>
             <p class="rating">${
               movie.vote_average
             }<span>h</span></p>
             <div class="category">Movie</div>
             </div>
         </div>`;
}

// FORMATA DATE
const dateFormatter = function (date) {
  let currdate = date;
  const newDate = currdate.slice(0, 4);
  return newDate;
}

NowPlaying().then((movies) => {
  movies.forEach((moviee) => {
    const htmll = NowPlayingfun(moviee);
    NowPlayingMoviesDiv.insertAdjacentHTML("beforeend", htmll);
  });
});
  
