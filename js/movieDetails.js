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

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

const movieDetails = document.querySelector(".movie-detail");

let url = document.location.href;
let fetcid = url.slice(url.indexOf("=") + 1);
console.log(fetcid);
if(!isInt(fetcid)){
	window.location.href="index.html";
}

 function myFunction() {
	const moviePlayer = document.querySelector(".movie-player");
	moviePlayer.innerHTML = `
	<iframe id="Frame" allow="fullscreen" src="https://xtreamhub.com/video/1014887/"></iframe>`
 }
 
 function myTest() {
	 
	 //const doc = new DOMParser().parseFromString(str, 'text/html');
     //console.log(doc.body.children[0].src);
	 
	 var iframe = document.getElementById('Frame');
   
  console.log(iframe.contentWindow.document.body.innerHTM);
}

const playerLoad = function () {
	/*document.getElementsByTagName('html')[0].innerHTM*/
	let links = document.getElementsByTagName('iframe');
    let urlVideo = '';
    if(links !== null && links !== undefined && links.length > 0){
        urlVideo = links[0].src;
        console.log(urlVideo);
    }
}
const movieLoad = function () {
 
  CurrMovie(fetcid).then((dat) => {
	  
    let htm = "";
    htm = dtls(dat);
    movieDetails.innerHTML = htm;
    
  });
};


/* MOVIE CLCIKED*/
const dtls = function (moviee) {
	document.title = `${
    moviee.title +
    " " +
    "(" +
    moviee.release_date+
    ")" +
    " " +
    "|" +
    " " +
    "PinoyMoviesHub"
  }`
  let cate = "";
  moviee.genres.forEach((item) => {
    cate += `<a>${item.name}</a>`;
  });
	document.getElementById("myDiv").style.background = "url(https://image.tmdb.org/t/p/w500/${moviee.poster_path})"
	return `<div class="container">

          <div class="movie-player">
          <figure class="movie-detail-banner">

            <img src="https://image.tmdb.org/t/p/w500/${
      moviee.poster_path
    }">

            <button class="play-btn">
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>

          </figure>
</div>
          <div class="movie-detail-content">
            <h1 class="h1 detail-title">
              ${moviee.title}
            </h1>

            <div class="meta-wrapper">

              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 13</div>

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="ganre-wrapper">
			              ${cate}
              </div>

              <div class="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time>${moviee.release_date}</time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT115M">${moviee.runtime}  min</time>
                </div>

              </div>

            </div>

            <p class="storyline">
              ${moviee.overview}.
            </p>

            <div class="details-actions">

              <button class="share">
                <ion-icon name="share-social"></ion-icon>

                <span>Share</span>
              </button>

              <div class="title-wrapper">
                <p class="title">PinoyMoviesHub APP</p>

                <p class="text">Streaming Channels</p>
              </div>

              <button onclick="window.open('https://play.google.com/store/apps/details?id=com.tkstudio.nflix')" class="btn btn-primary">
                <ion-icon name="play"></ion-icon>

                <span>Watch Now</span>
              </button>

            </div>

          

          </div>

        </div>`
}

const html2 = function (moviee) {
  document.title = `${
    moviee.title +
    " " +
    "(" +
    moviee.release_date+
    ")" +
    " " +
    "|" +
    " " +
    "Cinemaa"
  }`;

  let cate = "";
  
  return `<div class="movie_details">
    <img class="movie_details_poster" src="https://image.tmdb.org/t/p/w500/${
      moviee.poster_path
    }"
    onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
     alt="title">
    <div class="movie_details_about">
        <h2 class="movie_details_title">${moviee.title}</h2>
        <div class="movie_details_about_category">
            <ul class="movie_details_about_category_ul">
            ${cate}
            </ul>
        </div>
        <div class="date_rating">
            <p class="time">${
              moviee.runtime
            } minutes</p><span class="dot dot2"></span>
            <p class="date">${
              moviee.release_date
            }</p><span class="dot dot2"></span>
            <p class="rating">${moviee.vote_average
            }<span></span></p>
        </div>
        <div class="playButtonContainer"> 
       
        <a class="playLink" href="https://www.2embed.to/embed/imdb/movie?id=${
          moviee.imdb_id
        }"><button class="play_btn">Play</button></a> 
            <span > <a class="GoogleButton" href="https://www.google.com/search?q=${
              moviee.title +
              " " +
              "(" +
              moviee.release_date +
              ")"
            }" target="_blank">Google It!</a> </span> 
            </div>
            
    </div>

</div> `;
};

const dateFormatter = function (date) {
  let currdate = date;
  const newDate = currdate.slice(0, 4);
  return newDate;
};

const averagVoteformat = function (receivedVote) {
  let currVote = receivedVote.toString();
  const newVote = currVote.slice(0, 3);
  return newVote;
};

const Bigposter = function (movieee) {
  return `<img class="poster_big_img" src="https://image.tmdb.org/t/p/original/${movieee.backdrop_path}" alt="">`;
};

const CurrMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=680c99274ddab12ffac27271d9445d45&append_to_response=credits`
  );


  const data = await res.json();
  return data
};

movieLoad();

